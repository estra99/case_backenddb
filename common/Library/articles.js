"use strict";
exports.__esModule = true;
exports.Articles = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.Articles = mongoose.model('Articles', new Schema({
    autor: String,
    titulo: String,
    subtitulo: String,
    texto: String,
    fecha: String,
    data: {
        images: [String],
        videos: [String]
    },
    hashtags: [String]
}));
