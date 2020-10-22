"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MongoController = void 0;
var mongoose = require("mongoose");
var common_1 = require("../common");
var faker = require("faker");
var dotenv = require("dotenv");
var allhashtags = ["#malavibra", "#nohate", "#everyday", "#oneday", "#popular", "#otrohashtag", "#region", "#mapa", "#rojo", "#blackhole"];
var MongoController = /** @class */ (function () {
    // 'mongodb://localhost:27017/hashtags'
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
    MongoController.prototype.getArticlesByHashtags = function (hashtagsArr) {
        return __awaiter(this, void 0, void 0, function () {
            var responseFromMongo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, common_1.Articles.find({ "hashtags": { $in: hashtagsArr } })];
                    case 1:
                        responseFromMongo = _a.sent();
                        return [2 /*return*/, responseFromMongo];
                }
            });
        });
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
