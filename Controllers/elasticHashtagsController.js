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
exports.ElasticController = void 0;
var common_1 = require("../common");
var elasticsearch_1 = require("@elastic/elasticsearch");
var dotenv = require("dotenv");
var ElasticController = /** @class */ (function () {
    function ElasticController() {
        dotenv.config();
        this.log = new common_1.Logger();
        this.elasticClient = new elasticsearch_1.Client({ node: process.env.ELASTIC_API });
    }
    ElasticController.prototype.get_hashtags = function (first, second) {
        return __awaiter(this, void 0, void 0, function () {
            var bucketsDetails, maxMin, range, hashtags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.elasticClient.search({
                            index: "videos",
                            body: {
                                size: 0,
                                aggs: {
                                    hashtags_count: {
                                        terms: {
                                            field: "description",
                                            size: 10000
                                        }
                                    },
                                    duplicate_bucketcount: {
                                        stats_bucket: {
                                            buckets_path: "hashtags_count._count"
                                        }
                                    }
                                }
                            }
                        })];
                    case 1:
                        bucketsDetails = _a.sent();
                        maxMin = bucketsDetails.body.aggregations.duplicate_bucketcount;
                        range = Math.round((maxMin.max - maxMin.min) / 10);
                        return [4 /*yield*/, this.elasticClient.search({
                                index: "videos",
                                body: {
                                    size: 0,
                                    aggs: {
                                        hashtags: {
                                            terms: {
                                                field: "description",
                                                size: 10000
                                            },
                                            aggs: {
                                                final_filter: {
                                                    bucket_selector: {
                                                        buckets_path: {
                                                            total: "_count"
                                                        },
                                                        script: "params.total%" + range + " >= " + first + " && params.total%" + range + " <= " + second
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            })];
                    case 2:
                        hashtags = _a.sent();
                        return [2 /*return*/, hashtags.body.ag];
                }
            });
        });
    };
    ;
    ElasticController.prototype.matchAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.elasticClient.search({
                            index: "videos",
                            body: {
                                query: { match_all: {} }
                            }
                        })];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, all];
                }
            });
        });
    };
    ElasticController.getInstance = function () {
        if (!this.instance) {
            this.instance = new ElasticController();
        }
        return this.instance;
    };
    return ElasticController;
}());
exports.ElasticController = ElasticController;
