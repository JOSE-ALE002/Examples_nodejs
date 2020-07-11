import express from "express";
import morgan from "morgan";
// Sirve para hacer solicitudes de un servidor externo e impedir el bloqueo de CORS
import cors from "cors";
import path from "path";
import mongoose from "mongoose";

const app = express();

// Conexion a MongoDB
mongoose.connect('mongodb://localhost:27017/data', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(
  () => console.log("Conectado a mongodb"),
  (err) => {
    console.log("Ha ocurrido un error", err);
  }
);

// Settings
app.set("port", process.env.PORT || 4000);

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/nota'));

// app.get('/', (req, res) => {
//     res.send('Hola Mundo');
// });

import history from "connect-history-api-fallback";
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
