import * as dotenv from 'dotenv';

dotenv.config();

const APP_PORT = +process.env.APP_PORT || 4000;

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || '-';

const TOKEN = process.env.TOKEN || '';

export { APP_PORT, MONGODB_CONNECTION_URL, TOKEN };
