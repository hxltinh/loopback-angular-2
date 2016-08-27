/*
 * @DataMigrate
 * migrate all data for development here
 */
const path = require('path');
const pg = require('pg');

const loopback = require('loopback');
const boot = require('loopback-boot');

const DumpDatabase = require('../server/services/dump.database');
const DumpData = require('../server/services/dump.data');
const dumpDataConf = require('../server/config/dump.data.conf');

const dumpDB = new DumpDatabase({
  user: 'luffy',
  password: 'superman',
  database: 'luffydb',
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
  databaseDefault: 'template1',

});

dumpDB.execute().then(() => {
  console.log('refresh database success');
  const app = loopback();
  boot(app, path.resolve(__dirname, '../server'), err => {
    if (err) throw err;

    // const ds = app.datasources.postgres;
    const dumpDataServ = new DumpData(app, dumpDataConf);
    dumpDataServ.executeMigrate().then(result => console.log(result));
  });
});

// https://github.com/brianc/node-postgres

const dropDbSql = 'DROP DATABASE luffydb;';
var configPg = {
  'user': 'luffy',
  'password': 'superman',
  database: 'luffydb',
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
};
