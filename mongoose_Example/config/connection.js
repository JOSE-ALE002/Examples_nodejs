const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/exampleDB';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true  
}).then(() => {
  console.log('Database is connected to', url);
}).catch((err) => {
  console.log('Ha ocurrido un error', err);
});
