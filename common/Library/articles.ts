import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const Articles = mongoose.model('Articles',
new Schema({
  titulo:  String,
  subtitulo: String,
  texto: String,
  imagen: String,
  hashtags: [String]
}));