import * as Redis from 'ioredis';
import {Logger} from '../../common'

const redisCli = new Redis();
const logger = new Logger();
logger.info('Connected to Redis succesfully');

export default redisCli;







