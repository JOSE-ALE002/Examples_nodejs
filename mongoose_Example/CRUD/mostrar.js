require("../config/connection");
const Product = require("../model/user");

const mostrar = async () => {
  try {
    const find = await Product.find();
    console.log(find);    
  } catch (error) {
      console.log('Ha ocurrido un error', error);      
  }
};

mostrar();
