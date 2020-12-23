

var mysql = require('mysql');

var MySQLConPool = {};

var USER = 'Kotimachana';
var PWD = 'Git@555';
var DATABASE = 'Git_Hub';
var DB_HOST_NAME = '172.16.0.555';
var DB_PORT = '3307';

var MAX_POOL_SIZE = 200;
var MIN_POOL_SIZE = 10;

var MySQLConPool = mysql.createPool({
       host: DB_HOST_NAME,
       user: USER,
       password: PWD,
       port: DB_PORT,
       database: DATABASE,
       acquireTimeout: 5000,
       connectionLimit: MAX_POOL_SIZE,
       debug: false,
       multipleStatements: false,
       supportBigNumbers: true
});


MySQLConPool.on('acquire', function (connection) {
       // log.info('Database Connection Acquired', connection.threadId);
});
MySQLConPool.on('release', function (connection) {
       // log.info('Database Connection Released', connection.threadId);
});
MySQLConPool.on('enqueue', function () {
       //  log.info('Waiting for available connection slot');
});

exports.MySQLConPool = MySQLConPool;

