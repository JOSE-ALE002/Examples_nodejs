require("./config/connection");
const Product = require("./model/product");

const guardar = async () => {
  try {
    const newProduct = new Product({
      name: "Iphone 8",
      descripcion: "SnapDragon 710, 64GB Almacenamiento, 6GB RAM",
      price: 1000,
    });

    const resp = await newProduct.save();
    console.log(resp);
  } catch (error) {
      console.log('Ha ocurrido un error', error);      
  }
};

guardar();
