import * as express from 'express';
import {ElasticController} from '../Controllers'
import { MongoController } from '../Controllers/';
import redisCli from '../db/redis/redis';
import Redis from 'ioredis'

const app = express();


app.get('/getHashtags', async (req, res, next) : Promise<any> => {
    const init = + req.query.init;
    const last = + req.query.last;

    const response = await ElasticController.getInstance().get_hashtags(init, last);

    const cacheMongo = await Redis.get(`mongo-${init}-${last}:`);
    const list = ["#malavibra", "#nohate", "#everyday", "#oneday", "#popular", "#otrohashtag", "#region", "#mapa", "#rojo", "#blackhole"]

    // Si la hay, la envia al usuario
    if (cacheMongo){
        return res.json(cacheMongo);
    }else {
        const articules = await MongoController.getInstance().getArticlesByHashtags(list)
    }

});

export { app as MongoRouter };