"use strict";
exports.__esModule = true;
var expenses_controller_1 = require("./expenses.controller");
var express_1 = require("express");
var ExpenseRoutes = /** @class */ (function () {
    function ExpenseRoutes() {
        this.expenseRouter = express_1.Router();
        this.routes();
    }
    ExpenseRoutes.prototype.getExpenseRoutes = function () {
        return this.expenseRouter;
    };
    ExpenseRoutes.prototype.routes = function () {
        this.expenseRouter
            .get("/get-all-expenses", expenses_controller_1.getAllExpenses)
            .get("/get-monthly-expenses/:month/:year", expenses_controller_1.getMonthlyExpense)
            .post("/create", expenses_controller_1.createExpense)
            .put("/update", expenses_controller_1.updateExpense)["delete"]("/delete", expenses_controller_1.deleteExpense);
        return this.expenseRouter;
    };
    return ExpenseRoutes;
}());
exports.ExpenseRoutes = ExpenseRoutes;
