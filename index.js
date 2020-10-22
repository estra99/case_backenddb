"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var http = require("http");
var common_1 = require("./common");
<<<<<<< HEAD
var Controllers_1 = require("./Controllers");
var Controllers_2 = require("./Controllers");
var port = 3070;
=======
var mongoController_1 = require("./Controllers/mongoController");
var dotenv = require("dotenv");
dotenv.config();
var port = process.env.PORT;
>>>>>>> 5d7e6022048b44c92cce04f50d949ed534a4c88f
var logger = new common_1.Logger();
app_1["default"].set('port', port);
var server = http.createServer(app_1["default"]);
server.listen(port);
var mongoConection = Controllers_1.MongoController.getInstance().fillArticles();
var sqlConnection = Controllers_2.SQLServerController.getInstance();
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
module.exports = app_1["default"];
