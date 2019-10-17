"use strict";
exports.__esModule = true;
var incomes_controller_1 = require("./incomes.controller");
var express_1 = require("express");
var IncomeRoutes = /** @class */ (function () {
    function IncomeRoutes() {
        this.incomeRouter = express_1.Router();
        this.routes();
    }
    IncomeRoutes.prototype.getIncomeRoutes = function () {
        return this.incomeRouter;
    };
    IncomeRoutes.prototype.routes = function () {
        return this.incomeRouter
            .get("/get-all-incomes", incomes_controller_1.getAllIncomes)
            .get("/get-monthly-incomes/:month/:year", incomes_controller_1.getMonthlyIncome)
            .post("/create", incomes_controller_1.createIncome)
            .put("/update", incomes_controller_1.updateIncome)["delete"]("/delete", incomes_controller_1.deleteIncome);
    };
    return IncomeRoutes;
}());
exports.IncomeRoutes = IncomeRoutes;
