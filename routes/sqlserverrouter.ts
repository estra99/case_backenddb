import * as express from 'express';
import {ElasticController} from '../Controllers'
import {Logger} from '../common'
import {SQLServerController} from '../Controllers'

const app = express();
const log = new Logger();

app.get('/getHashtags', async (req, res, next) : Promise<any> => {
    const init = + req.query.init;
    const last = + req.query.last;

    // if (redis.get('dbsave{init=1},{last=3}'))
    const response = await ElasticController.getInstance().get_hashtags(init, last);
    const list = ['dogs', 'pitbull', 'cars']
    const articules = SQLServerController.getInstance().getArticlesByHashtags(list)
    // const test = "('" + list.join("','") + "')";
    // log.info(test)
    // redisCli.save(`mongo${init}${last}`, response)
    // redisCli.get()
    res.json(articules);

});

export { app as SQLServerRouter };