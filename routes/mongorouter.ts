import * as express from 'express';
import {ElasticController} from '../Controllers'
import { MongoController } from '../Controllers/';
import redisCli from '../db/redis/redis';

const app = express();

app.get('/getHashtags', async (req, res, next) : Promise<any> => {
    const init = + req.query.init;
    const last = + req.query.last;

    // if (redis.get('dbsave{init=1},{last=3}'))
    const response = await ElasticController.getInstance().get_hashtags(init, last);
    const list = ["#malavibra", "#nohate", "#everyday", "#oneday", "#popular", "#otrohashtag", "#region", "#mapa", "#rojo", "#blackhole"]
    const articules = await MongoController.getInstance().getArticlesByHashtags(list)
    // redisCli.save(`mongo${init}${last}`, response)
    // redisCli.get()
    res.json(articules);

});

export { app as MongoRouter };