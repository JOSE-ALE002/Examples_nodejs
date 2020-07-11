require("../config/connection");
const User = require("../model/user");

const updateOne = async () => {
  try {
    const resp = await User.updateOne(
      { username: "Benjamin" },
      {
        password: "Gutierrez_Bernal",
      }
    );

    User.updateOne();
    console.log(resp);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

const EncontrarActualizar = async () => {
  try {
    const resp = await User.findOneAndUpdate(
      { username: "Vanessa" },
      {
        password: "vane123",
        name: 'Kenia Vanessa Calderón'
      },
      { new: true }
    );

    console.log(resp);    
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

const updateUser = async () => {
  try {
    const resp = await User.update(
      { username: "Herberth Ibañez" },
      {
        // username: 'Herberth Ibañez',
        password: "her123",
        // name: 'Herberth Ernersto Ibañez Martinez'
      }
    );

    console.log(resp);
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

updateUser();
