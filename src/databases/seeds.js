require("dotenv/config");
const createConnection = require("./sqlite");

(async () => {
  try {
    const db = await createConnection();

    await db.run(`
      INSERT INTO users (name) VALUES ("Henrique")
    `);

    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Notebook Dell Core i3-1005G1 4GB 256GB",
        10,
        3999.00,
        "https://imgs.ponto.com.br/55020175/1xg.jpg?imwidth=500"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Notebook Acer Core i5-10210U 8GB 256GB",
        1,
        3049.00,
        "https://imgs.casasbahia.com.br/55050710/1g.jpg?imwidth=500"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Notebook Samsung Book Intel Core i5 8GB 256GB",
        5,
        2294.10,
        "https://a-static.mlcdn.com.br/800x560/notebook-samsung-book-intel-core-i5-8gb-256gb-ssd-156-full-hd-windows-11/magazineluiza/234099300/1dae9242b5dd61a5736f155930b95ebf.jpg"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Notebook Lenovo IdeaPad3i 82BS0002BR Intel Core i3 - 4GB 1TB",
        1,
        2609.10,
        "https://a-static.mlcdn.com.br/800x560/notebook-lenovo-ideapad3i-82bs0002br-intel-core-i3-4gb-1tb-156-lcd-windows-10/magazineluiza/135302300/2fa6801169fc56c6010edf99773ef942.jpg"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Notebook Apple MacBook Pro (de 13 polegadas, Processador M1 da Apple com 256 GB)",
        25,
        15919.10,
        "https://m.media-amazon.com/images/I/41z6lekLE1L._AC_SX466_.jpg"
      )
    `);

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  } finally {
    process.exit();
  }
})();
