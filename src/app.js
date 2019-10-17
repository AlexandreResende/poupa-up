"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var expenses_1 = require("./expenses/expenses");
var incomes_1 = require("./incomes/incomes");
var categories_middleware_1 = require("./middlewares/categories.middleware");
var App = /** @class */ (function () {
    function App() {
        this.incomeRoutes = new incomes_1.IncomeRoutes();
        this.expenseRoutes = new expenses_1.ExpenseRoutes();
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app
            .use(helmet())
            .use(cors())
            .use(bodyParser.urlencoded({ extended: true }))
            .use(bodyParser.json())
            .use(categories_middleware_1["default"])
            .use("/incomes", this.incomeRoutes.getIncomeRoutes())
            .use("/expenses", this.expenseRoutes.getExpenseRoutes());
    };
    return App;
}());
exports["default"] = new App().app;
