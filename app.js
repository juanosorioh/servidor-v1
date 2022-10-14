const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors')
require("./database");
require('dotenv').config();

//setings
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors())


//routes
app.use('/alumnos', require('./src/routes/alumnos.routes'));
app.use('/profesores', require('./src/routes/profesores.routes'));
app.use('/administrativos', require('./src/routes/administrativos.routes'));


//start a server 
app.listen(app.get("port"), () => {
  console.log(`escuchando en el puerto ${app.get("port")}`);
});