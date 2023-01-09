import * as dotenv from 'dotenv';

dotenv.config();

const APP_PORT = +process.env.APP_PORT || 4000;

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || '-';

const SWAN_INITIAL_BALANCE = +process.env.SWAN_INITIAL_BALANCE || 100;
const SWAN_INITIAL_VALUE = +process.env.SWAN_INITIAL_VALUE || 50;
const DEFAULT_PROFILE_PICTURE = process.env.DEFAULT_PROFILE_PICTURE || '';
const TOKEN = process.env.TOKEN || '';

export { APP_PORT, MONGODB_CONNECTION_URL, SWAN_INITIAL_BALANCE, SWAN_INITIAL_VALUE, DEFAULT_PROFILE_PICTURE, TOKEN };
