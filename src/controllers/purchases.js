const sqlite = require("../databases/sqlite");

module.exports = {
  async create(req, res) {
    try {
      const connection = await sqlite();
      const { products } = req.body;
      const data = products.map((product) => [product.id, 1, product.units]);

      // Atualizar as unidades de cada produto
      await Promise.all(
          data.map((product) => {
            return connection.run(
                `UPDATE products SET units = units - ? WHERE id = ?`,
                [product[2], product[0]]
            );
          })
      );

      // Inserir as compras
      const placeholders = data.map(() => "(?, ?, ?)").join(",");
      const flatData = data.flat(); // Transformar em um array simples

      await connection.run(
          `INSERT INTO purchases (product_id, user_id, units) VALUES ${placeholders}`,
          flatData
      );

      return res.json({ message: "Purchases created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
