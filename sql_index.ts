import App from './app';
import * as http from 'http';
import { Logger } from './common'
import {SQLServerController} from './Controllers'
import dotenv = require('dotenv');


dotenv.config();
const port = process.env.PORT;

const logger = new Logger();

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

const sqlConnection = SQLServerController.getInstance();
// sqlConnection.getArticlesByHashtags(["dogs", "cars", "pitbull"]);




server.on('listening', () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`)
});

module.exports = App;