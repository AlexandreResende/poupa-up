"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var expenses_model_1 = require("./expenses.model");
exports.getAllExpenses = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenses, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, new expenses_model_1.ExpenseService().getAllExpenses()];
            case 1:
                expenses = (_a.sent()).expenses;
                res.status(200).json({
                    error: null,
                    expenses: expenses
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({
                    error: "Could not retrieve all expenses " + err_1,
                    expenses: null
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMonthlyExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, month, year, expenses, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, month = _a.month, year = _a.year;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new expenses_model_1.ExpenseService().getMonthlyExpenses(Number(month), Number(year))];
            case 2:
                expenses = (_b.sent()).expenses;
                res.status(200).json({
                    error: null,
                    expenses: expenses
                });
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.status(500).json({
                    error: "Could not retrieve monthly expenses " + err_2,
                    expenses: null
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var createExpenseReq, createExpenseResponse, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                createExpenseReq = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new expenses_model_1.ExpenseService().createExpense(createExpenseReq)];
            case 2:
                createExpenseResponse = _a.sent();
                res.status(200).json({
                    error: null,
                    expenses: createExpenseResponse
                });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(500).json({
                    error: "Could not create expense " + err_3,
                    expenses: null
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, rest, updateExpenseRespose, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, rest = __rest(_a, ["id"]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new expenses_model_1.ExpenseService().updateExpense(id, rest)];
            case 2:
                updateExpenseRespose = _b.sent();
                res.status(200).json({
                    error: null,
                    expenses: {
                        updated: updateExpenseRespose[0]
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                err_4 = _b.sent();
                res.status(500).json({
                    error: "Could not update Expense " + err_4,
                    expenses: null
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteExpenseResponse, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, new expenses_model_1.ExpenseService().deleteExpense(id)];
            case 2:
                deleteExpenseResponse = _a.sent();
                res.status(200).json({
                    error: null,
                    expenses: {
                        deleted: deleteExpenseResponse
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(500).json({
                    error: "Could not delete expense " + err_5,
                    expenses: null
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
