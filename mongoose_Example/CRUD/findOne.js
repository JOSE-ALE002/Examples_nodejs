require("../config/connection");
const User = require("../model/user");

const findOne = async () => {
  try {
    const resp = await User.findOne({ username: "Benjamin" });
    console.log(resp);
  } catch (error) {
    console.log("¡Error!", error);
  }
};


findOne();
