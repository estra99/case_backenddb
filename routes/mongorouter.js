"use strict";
exports.__esModule = true;
exports.MongoRouter = void 0;
var express = require("express");
var mongoController_1 = require("../Controllers/mongoController");
var app = express();
exports.MongoRouter = app;
app.put('/rellenar', function (req, res, next) {
    mongoController_1.MongoController.getInstance().fillArticles();
    res.json({ message: "Ok" });
});
