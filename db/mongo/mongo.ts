import * as Mongoose from 'mongoose';
import { Logger } from '../../common'

let mongodb : Mongoose.Connection;
const logger = new Logger();


export const connectMongodb = () => {

    const uri = 'mongodb://localhost:27017/hashtags'

    if(mongodb) {
        return;
    }

    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 2000
    });

    mongodb = Mongoose.connection;

    mongodb.once('open', async() => {
        logger.info("Connected to Mongo");
    });

    mongodb.on('error', () => {
        logger.error("Error connecting to Mongo")
    })
};

export const disconnectMongodb = () => {

    if (!mongodb) {
        return;
      }
      Mongoose.disconnect();
};