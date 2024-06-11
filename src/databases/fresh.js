require("dotenv").config();
const createConnection = require("./sqlite");

(async () => {
    try {
        const db = await createConnection();

        await db.exec(`
      DROP TABLE IF EXISTS purchases;
    `);

        await db.exec(`
      DROP TABLE IF EXISTS users;
    `);

        await db.exec(`
      DROP TABLE IF EXISTS products;
    `);

        console.log("Tables dropped successfully.");
    } catch (error) {
        console.error("Error dropping tables:", error);
    } finally {
        process.exit();
    }
})();
