'use strict';
const config = require('../config/dump-data');
const DumpData = require('../services/dump-data');

module.exports = app => {
  const dumpDataServ = new DumpData(app, config);

  console.log('==== start checking admin is created or not ====');
  dumpDataServ.findAdmin()
    .then(res => {
      if (res) {
        console.log('==== already have admin ====');
        return false;
      }
      return dumpDataServ.createAdmin();
    })
    .then(admin => {
      if (!admin) { return false; }
      return dumpDataServ.createRole('admin', admin.id);
    })
    .then(principal => {
      if(!principal) {
        return console.log('==== admin is NOT created ====');
      }
      return console.log('==== admin is created ====');
    });

};
