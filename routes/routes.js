"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var common_1 = require("../common");
var mongorouter_1 = require("./mongorouter");
var elasticrouter_1 = require("./elasticrouter");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.logger = new common_1.Logger;
        this.middleware();
        this.routes();
    }
    // Configure the Express middleware
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use('/mongodb', mongorouter_1.MongoRouter);
        this.express.use('/elastic', elasticrouter_1.ElasticRouter);
    };
    return Routes;
}());
exports["default"] = new Routes().express;
