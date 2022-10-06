const express = require('express')
const path = require('path')
const app = express()
const routes = require('./src/routes/users.routes')
const bodyParser = require('body-parser')
require('./database')

//setings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use((req, res, next)=>{
    console.log(`${req.url}  -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes

app.use(routes);

//start a server
app.listen(app.get('port'), ()=>{console.log(`escuchando en el puerto ${app.get('port')}`)})