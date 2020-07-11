const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const server  = express();

//Setting
server.set('servidor', process.env.PORT || 3000);

// Middleware
server.use(morgan('dev')); //----- muestra informacion del metodo y la ruta en consola
server.use(express.json()); //---- traduce a JSON los objetos enviandos al servidor
server.use(express.urlencoded());//----// Permite capturar datos enviados por un formulario HTML

//Routes
server.use(routes);

//Static Files
server.use(express.static('public'));

//Start Server
server.listen(server.get('servidor'), () => {
    console.log(`server on port ${server.get('servidor')}`);
});
