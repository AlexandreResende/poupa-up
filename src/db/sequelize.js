"use strict";
exports.__esModule = true;
var Sequelize = require("sequelize");
var db = 'poupaup';
var username = 'postgrestest';
var password = 'postgrestest';
exports.sequelize = new Sequelize(db, username, password, {
    dialect: "postgres",
    host: "127.0.0.1",
    port: 5432,
    pool: {
        max: 50,
        min: 1,
        idle: 1
    }
});
