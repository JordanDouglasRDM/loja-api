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
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Teclado Gamer Semi Mecânico com Fio USB e Iluminação LED RGB Teclado Preto",
        25,
        78.90,
        "https://http2.mlstatic.com/D_NQ_NP_884912-MLU72067385668_102023-O.webp"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Mouse Gamer Para Jogo 3.200 Dpi Óptico Com Led Rgb Usb Exbom",
        15,
        39.92,
        "https://http2.mlstatic.com/D_NQ_NP_916293-MLB76747490319_052024-O.webp"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Mousepad Gamer Abstract Liquid Todos Tamanhos Profissional",
        19,
        39.52,
        "https://http2.mlstatic.com/D_NQ_NP_946824-MLB69402428553_052023-O.webp"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Mochila Impermeável NotebookCor Preto Desenho Do Tecido Moderno Executivo",
        7,
        169.10,
        "https://http2.mlstatic.com/D_NQ_NP_952194-MLU70975006646_082023-O.webp"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Cabo Hdmi 2.0 4k Blindado 5m Ponta Gold 60hz Aquário",
        6,
        28.75,
        "https://http2.mlstatic.com/D_NQ_NP_918615-MLB52591014813_112022-O.webp"
      )
    `);
    await db.run(`
      INSERT INTO products (name, units, price, image) VALUES (
        "Impressora a cor multifuncional Epson EcoTank L3250 com wifi preta 110V",
        50,
        1045.99,
        "https://http2.mlstatic.com/D_NQ_NP_984266-MLA48196101433_112021-O.webp"
      )
    `);

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  } finally {
    process.exit();
  }
})();
