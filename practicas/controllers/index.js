const item = [
    {
        id: 1,
        name: "Producto1"
    },
    {
        id: 2,
        name: "Producto2"
    },
    {
        id: 3,
        name: "Producto3"
    }
];

module.exports = {
  index: (req, res) => {
    res.render("index.ejs", {
      title: "Mi web Store",
    });
  },

  product: (req, res, next) => {
    res.render("products.ejs", {
      title: "List_Products",
      items: item,
    });
  },

  newProduct: (req, res) => {
    const { productName } = req.body;
    item.push({
      id: item.length + 1,
      name: productName,
    });

    res.redirect("/products");
  },
};
