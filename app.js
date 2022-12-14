require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors')
require("./database");
const validarJWT = require("./src/middlewares/validarJWT")
const validarUsuario = require("./src/middlewares/validarUsuarios")

//setings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors())


//routes
app.use('/alumnos', validarJWT, require('./src/routes/alumnos.routes'));
app.use('/profesores', validarJWT, require('./src/routes/profesores.routes'));
app.use('/administrativos', /* validarJWT, validarUsuario, */ require('./src/routes/administrativos.routes'));
app.use('/auth', require('./src/routes/auth.routes'))

//start a server 
app.listen(app.get("port"), () => {
  console.log(`escuchando en el puerto ${app.get("port")}`);
});