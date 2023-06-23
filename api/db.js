import 'dotenv/config';
import mysql from "mysql2";

export const db = mysql.createConnection({
    host: 'database-1.csclha9qbzz8.ap-south-1.rds.amazonaws.com', // Replace with your RDS host
    user: process.env.DB_USER, // Assuming you have set the DB_USER value in your .env file
    password: process.env.DB_PASSWORD, // Assuming you have set the DB_PASSWORD value in your .env file
    database: process.env.DB_NAME, // Assuming you have set the DB_NAME value in your .env file
});
