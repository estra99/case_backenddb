"use strict";
exports.__esModule = true;
exports.SQLServerController = void 0;
var tedious_1 = require("tedious");
var common_1 = require("../common");
var SQLServerController = /** @class */ (function () {
    function SQLServerController() {
        var _this = this;
        this.log = new common_1.Logger();
        try {
            this.db = new tedious_1.Connection({
                server: 'localhost',
                authentication: {
                    type: 'default',
                    options: {
                        userName: 'SA',
                        password: '<bornToBeWild2020@1>'
                    }
                },
                options: {
                    database: 'ArticulosDB',
                    encrypt: false
                }
            });
            this.db.on('connect', function (err) {
                if (err) {
                    _this.log.error("Error en conexion a SQL Server");
                }
                else {
                    _this.log.info("Connectado a SQL Server");
                }
            });
        }
        catch (e) {
            this.log.error(e);
        }
    }
    SQLServerController.getInstance = function () {
        if (!this.instance) {
            this.instance = new SQLServerController();
        }
        return this.instance;
    };
    return SQLServerController;
}());
exports.SQLServerController = SQLServerController;
