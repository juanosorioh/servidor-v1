const mongoose = require('mongoose')
require('dotenv').config()
mongoose
.connect(process.env.ATLAS)
.then(()=>{console.log("database connect")})
.catch((err)=>{console.log("error database",err)})