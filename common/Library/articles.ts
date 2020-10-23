import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const Articles = mongoose.model('Articles',
new Schema({
  autor: String,
  titulo:  String,
  subtitulo: String,
  texto: String,
  fecha: String,
  data: {
    images: [String],
    videos: [String]
  },
  hashtags: [String]
}));
