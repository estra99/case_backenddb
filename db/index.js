"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.elasticClient = exports.disconnectMongodb = exports.connectMongodb = void 0;
var mongo_1 = require("./mongo/mongo");
__createBinding(exports, mongo_1, "connectMongodb");
__createBinding(exports, mongo_1, "disconnectMongodb");
var elasticsearch_1 = require("./elastic/elasticsearch");
__createBinding(exports, elasticsearch_1, "elasticClient");
