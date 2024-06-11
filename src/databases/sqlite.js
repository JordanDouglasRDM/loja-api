const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
require('dotenv').config();

const DATABASE = process.env.DATABASE;

async function createConnection() {
    try {
        const db = await open({
            filename: DATABASE,
            driver: sqlite3.Database
        });
        return db;
    } catch (error) {
        console.error('Failed to open the database:', error);
        throw error;
    }
}

module.exports = createConnection;
