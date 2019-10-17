"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = process.env.PORT || 7777;
app_1["default"]
    .listen(port, function () {
    console.log("Server running on port " + port);
});
