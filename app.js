"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure the Express middleware
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        this.express.get('/', function (req, res, next) {
            res.send("Home page");
        });
        this.express.use('/api', routes_1["default"]);
        this.express.use('*', function (req, res, next) {
            res.send("Request invalido");
        });
    };
    return App;
}());
exports["default"] = new App().express;
