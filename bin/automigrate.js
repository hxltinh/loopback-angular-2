const path = require('path');
const config = require('../server/config/dump-data');
const DumpData = require('../server/services/dump-data');

const app = require(path.resolve(__dirname, '../server/server'));
const ds = app.datasources.postgres;

ds.automigrate('user', err => {
  if (err) throw err;

  const dumpDataServ = new DumpData(app, config);

  return dumpDataServ.createAdmin()
    .then(admin => {
      if (!admin) { return false; }
      return new Promise((resolve, reject) => {
        ds.automigrate(['Role', 'ACL', 'RoleMapping', 'AccessToken'], err => {
          if (err) { return reject(err); }
          dumpDataServ.createRole('admin', admin.id)
            .then(result => resolve(result));
        });
      });
    })
    .then(principal => {
      ds.disconnect();
      if (!principal) {
        return console.log('==== admin is NOT created ====');
      }
      return console.log('==== admin is created ====');
    })
    .catch(err => {
      ds.disconnect();
      console.log('create built-in table fail:', err);
    });
});
