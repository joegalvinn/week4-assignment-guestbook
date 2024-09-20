//here you can add your SQL queries to create your table and add dummy data

import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date DATE,
    review VARCHAR(255),
    star TEXT
);`);
