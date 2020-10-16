import App from './app';
import * as http from 'http';
import { Logger } from './common'
import {connectMongodb} from './db'


const port = 3070;
const logger = new Logger();

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

connectMongodb();

server.on('listening', () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`)
});

module.exports = App;