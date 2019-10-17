"use strict";
exports.__esModule = true;
var Sequelize = require("sequelize");
var sequelize_1 = require("../db/sequelize");
exports.Income = sequelize_1.sequelize.define("Incomes", {
    id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        primaryKey: true
    },
    value: Sequelize.FLOAT,
    description: Sequelize.TEXT,
    category: Sequelize.STRING,
    month: Sequelize.INTEGER,
    year: Sequelize.INTEGER
});
