"use strict";
exports.__esModule = true;
exports.MongoRouter = void 0;
var express = require("express");
var app = express();
exports.MongoRouter = app;
app.put('/rellenar', function (req, res, next) {
    // HateController.getInstance().fillHatePosts();
    res.json({ message: "Ok" });
});
