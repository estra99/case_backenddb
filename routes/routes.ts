import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Logger } from '../common'
import { MongoRouter } from './mongorouter'
import { ElasticRouter } from './elasticrouter'

class Routes{

    public express : express.Application;
    public logger : Logger;

    constructor() {
        this.express = express();
        this.logger = new Logger;

        this.middleware();
        this.routes();
    }

    // Configure the Express middleware
    private middleware() : void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended : false}));
    }

    private routes() : void {
        this.express.use('/mongodb', MongoRouter);
        this.express.use('/elastic', ElasticRouter);

    }
}

export default new Routes().express;