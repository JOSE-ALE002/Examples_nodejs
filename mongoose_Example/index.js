require("./config/connection");

const Product = require("./model/product");
const product = require("./model/product");

const newProduct = new Product({
  name: "Laptop",
  descripcion: "AMD E1, Disco HDD 500_GB",
  price: 400,
});

newProduct
  .save()
  .then((product) => {
    console.log("Guardado", product);
  })
  .catch((err) => {
    console.log("Ha ocurrido un error", err);
  });
