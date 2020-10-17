"use strict";
exports.__esModule = true;
exports.elasticClient = void 0;
var elastic = require("elasticsearch");
exports.elasticClient = new elastic.Client({
    host: 'localhost:9200'
});
