"use strict";
exports.__esModule = true;
exports.Articles = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.Articles = mongoose.model('Articles', new Schema({
    titulo: String,
    subtitulo: String,
    texto: String,
    imagen: String,
    hashtags: [String]
}));
