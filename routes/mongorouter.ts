import * as express from 'express';
import {ElasticController} from '../common'
import { MongoController } from '../Controllers/mongoController';

const app = express();

app.get('/getHashtags', async (req, res, next) : Promise<any> => {
    const init = + req.query.init;
    const last = + req.query.last;

    // redis
    const response = await ElasticController.getInstance().get_hashtags(init, last);

    res.json(response);

});

export { app as MongoRouter };