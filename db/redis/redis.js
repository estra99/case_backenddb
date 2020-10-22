"use strict";
exports.__esModule = true;
var Redis = require("ioredis");
var common_1 = require("../../common");
var redisCli = new Redis();
var logger = new common_1.Logger();
logger.info('Connected to Redis succesfully');
exports["default"] = redisCli;
