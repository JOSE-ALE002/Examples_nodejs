require("./config/connection");

const User = require("./model/user");

const createUser = async () => {
  try {
    const newUser = new User({
      username: "Benjamin",
      password: "123",
    });
    const resp = await newUser.save();
    console.log(resp);
    
  } catch (error) {
      console.log('Ha ocurrido un error', error);      
  }
};

createUser();
