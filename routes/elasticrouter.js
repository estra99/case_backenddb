"use strict";
exports.__esModule = true;
exports.ElasticRouter = void 0;
var express = require("express");
var app = express();
exports.ElasticRouter = app;
app.put('/getHashtags', function (req, res, next) {
    // HateController.getInstance().fillHatePosts();
    res.json({ message: "Ok" });
});
