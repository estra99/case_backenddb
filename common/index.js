"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Articles = exports.Logger = void 0;
var Logger_1 = require("./Logger/Logger");
__createBinding(exports, Logger_1, "Logger");
var articles_1 = require("./library/articles");
__createBinding(exports, articles_1, "Articles");
