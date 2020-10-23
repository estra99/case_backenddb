"use strict";
exports.__esModule = true;
exports.SQLServerController = void 0;
var tedious_1 = require("tedious");
var common_1 = require("../common");
var dotenv = require("dotenv");
var SQLServerController = /** @class */ (function () {
    function SQLServerController() {
        var _this = this;
        dotenv.config();
        this.log = new common_1.Logger();
        try {
            this.db = new tedious_1.Connection({
                server: process.env.SQL_API,
                authentication: {
                    type: 'default',
                    options: {
                        userName: process.env.USER_SQL,
                        password: process.env.PASSWORD_SQL
                    }
                },
                options: {
                    database: process.env.DATABASE,
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
    SQLServerController.prototype.getArticlesByHashtags = function (hashtagsArr) {
        var _this = this;
        var hashtagsFormatted = hashtagsArr.join("','");
        this.log.info(hashtagsFormatted);
        var request = new tedious_1.Request("\n        SELECT A.ArticuloId, A.Titulo, A.Subtitulo, A.Autor, A.Content, H.Hashtag\n        FROM Articulos AS A\n        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId\n        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId\n        WHERE H.Hashtag IN ('" + hashtagsFormatted + "') FOR JSON PATH", function (err, rowCount) {
            if (err) {
                _this.log.error("Error in sql query " + err);
            }
            else {
                _this.log.info(rowCount + ' rows');
            }
        });
        var JSONResponse = [];
        request.on('row', function (columns) {
            var row = {};
            columns.forEach(function (column) {
                row[column.metadata.colName] = column.value;
            });
            JSONResponse.push(row);
        });
        this.db.execSql(request);
        return (request);
        /*
        this.db.execSql(new Request(`
        SELECT A.ArticuloId, A.Titulo, A.Autor, A.Content, H.Hashtag, MXA.Link
        FROM Articulos AS A
        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId
        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId
        INNER JOIN MediaXArt AS MXA on A.ArticuloId = MXA.ArticuloId
        WHERE H.Hashtag IN ${test}`, (err, _, rows) =>
            res.json({ articulos: rows, err })));
        });

        const request = new Request (`
        SELECT A.ArticuloId, A.Titulo, A.Autor, A.Content, H.Hashtag, MXA.Link
        FROM Articulos AS A
        INNER JOIN HashtagXArt AS HXA on A.ArticuloId = HXA.ArticuloId
        INNER JOIN Hashtags AS H on H.HashtagId = HXA.HashtagId
        INNER JOIN MediaXArt AS MXA on A.ArticuloId = MXA.ArticuloId
        WHERE H.Hashtag IN ${test} FOR JSON PATH`,(err) => {
            if(err){
                this.log.error('Error en el SP '+ err)
                return;
            }
        })

        return request;
        */
    };
    SQLServerController.getInstance = function () {
        if (!this.instance) {
            this.instance = new SQLServerController();
        }
        return this.instance;
    };
    return SQLServerController;
}());
exports.SQLServerController = SQLServerController;
