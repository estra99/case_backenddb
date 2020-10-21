"use strict";
exports.__esModule = true;
exports.MongoController = void 0;
var mongoose = require("mongoose");
var common_1 = require("../common");
var faker = require("faker");
var dotenv = require("dotenv");
var allhashtags = ["#malavibra", "#nohate", "#everyday", "#oneday", "#popular", "#otrohashtag", "#region", "#mapa", "#rojo", "#blackhole"];
var MongoController = /** @class */ (function () {
    function MongoController() {
        var _this = this;
        dotenv.config();
        this.log = new common_1.Logger();
        try {
            mongoose.connect(process.env.MONGO_API, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 2000
            });
            this.db = mongoose.connection;
            this.db.on('error', function () {
                _this.log.error("No se pudo conectar a mongo");
            });
            this.db.once('open', function () {
                _this.log.info("Conectado a mongo");
            });
        }
        catch (e) {
            this.log.error(e);
        }
    }
    MongoController.prototype.fillArticles = function () {
        var _this = this;
        try {
            var quantity = 100;
            var _loop_1 = function () {
                var aproxHashtags = Math.trunc(Math.random() * 4 + 1) / allhashtags.length;
                // const hashtags = []
                var newPost = new common_1.Articles({
                    titulo: faker.lorem.words(7),
                    subtitulo: faker.lorem.words(3),
                    texto: faker.lorem.paragraphs(2),
                    imagen: faker.image.nature(),
                    hashtags: allhashtags.filter(function (element, index, array) {
                        if (Math.random() <= aproxHashtags) {
                            return true;
                        }
                    })
                });
                newPost.save(function (err, post) {
                    if (err) {
                        _this.log.error(err);
                    }
                });
                quantity--;
            };
            while (quantity > 0) {
                _loop_1();
            }
            ;
        }
        catch (e) {
            this.log.error(e);
        }
    };
    MongoController.getInstance = function () {
        if (!this.instance) {
            this.instance = new MongoController();
        }
        return this.instance;
    };
    return MongoController;
}());
exports.MongoController = MongoController;
