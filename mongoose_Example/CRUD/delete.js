require("../config/connection");
const User = require("../model/user");

const deleteUser = async () => {
  try {
    const resp = await User.deleteOne({ username: "Benjamin" });
    console.log(resp);
  } catch (error) {
      console.log('Ha ocurrido un error', error);      
  }
};

deleteUser();