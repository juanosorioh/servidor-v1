const express = require("express");
//const path = require("path");
const app = express();
const routesPers = require("./src/routes/users.routes");
const morgan = require('morgan');
const cors = require('cors')
//const bodyParser = require("body-parser");
require("./database");
require('dotenv').config();



//setings
app.set("port", process.env.PORT || 3000);



//middlewares
app.use((req, res, next) => {
  //nos dicen las rutas y el metodo de consulta
  console.log(`${req.url}  -${req.method}`);
  next();
});
app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors())




//routes
//app.use(routesPers);
app.use()


//start a server
app.listen(app.get("port"), () => {
  console.log(`escuchando en el puerto ${app.get("port")}`);
});
