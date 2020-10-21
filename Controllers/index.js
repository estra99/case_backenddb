"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.ElasticController = exports.MongoController = void 0;
var mongoController_1 = require("./mongoController");
__createBinding(exports, mongoController_1, "MongoController");
var elasticHashtagsController_1 = require("./elasticHashtagsController");
__createBinding(exports, elasticHashtagsController_1, "ElasticController");
