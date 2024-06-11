const sqlite = require("../databases/sqlite");

module.exports = {
  async select(_, res) {
    try {
      const connection = await sqlite();
      const rows = await connection.all(`SELECT * FROM products WHERE units > 0`);
      return res.json({ products: rows });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
