const pg = require('pg');
const _ = require('lodash');

class DumpDatabase {

  constructor(config) {
    this.config = config;

    // this.checkDbExist = `SELECT 1 FROM pg_database WHERE datname='${this.config.database}'`;
    this.dropDbIfExistSql = `DROP DATABASE IF EXISTS ${this.config.database}`;
    this.createDbSql = `CREATE DATABASE ${this.config.database}`;
    this.grantPrivilegesSql = `GRANT ALL PRIVILEGES ON
      DATABASE ${this.config.database} TO ${this.config.user}`;
  }

  execute() {
    console.log('config:', this.config);
    return this.dropIfDbExist()
      .then(() => this.createDb())
      .then(() => this.grantPrivileges())
      .catch(err => console.log(err));
  }

  grantPrivileges() {
    return this.sqlExecution(this.grantPrivilegesSql);
  }

  createDb() {
    return this.sqlExecution(this.createDbSql);
  }

  dropIfDbExist() {
    return this.sqlExecution(this.dropDbIfExistSql);
  }

  sqlExecution(sql) {
    return new Promise((resolve, reject) => {
      const config = _.assign({}, this.config, {database: this.config.databaseDefault});
      const client = new pg.Client(config);
      client.connect(err => {
        if (err) { return reject(err); };
        // execute a query on our database
        return client.query(sql, [], (err, result) => {
          if (err) { return reject(err); };
          // disconnect the client
          return client.end((err) => {
            if (err) { return reject(err); };
            return resolve(result);
          });
        });
      });
    });
  }
}

module.exports = DumpDatabase;
