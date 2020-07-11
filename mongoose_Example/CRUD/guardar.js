require("../config/connection");
const User = require("../model/user");

const createUser = async () => {
  try {
    const newUser = new User({
      username: "Vanessa",
      password: "vane",
    });

    await newUser.save();
    
    const newUser2 = new User({
        username: "Benjamin",
        password: "benji",
    });

    await newUser2.save();

  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

createUser();
