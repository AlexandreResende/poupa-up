"use strict";
exports.__esModule = true;
var categories_1 = require("../enums/categories");
var categoryMiddleware = function (req, res, next) {
    if (req.path.indexOf("create") !== -1) {
        if (Object.keys(categories_1["default"]).indexOf(req.body.category) === -1) {
            return res.status(400).json({
                error: "Invalid " + req.body.category + " category passed to application"
            });
        }
    }
    next();
};
exports["default"] = categoryMiddleware;
