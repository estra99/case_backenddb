import * as express from 'express';
import {ElasticController} from '../Controllers'
import { MongoController } from '../Controllers/';

const app = express();

app.get('/getHashtags', async (req, res, next) : Promise<any> => {
    const init = + req.query.init;
    const last = + req.query.last;

    // redis
    const response = await ElasticController.getInstance().get_hashtags(init, last);

    res.json(response);

});

export { app as MongoRouter };