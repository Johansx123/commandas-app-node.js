
import { DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE} from "./config.js";
import pkg from 'mysql2/promise';
const { createPool } = pkg;

export const poolconf = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
  };

 export const pool = createPool({ 
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})