const User = require('../models/users')
const ctrl ={}
ctrl.agregarUsuario = async (req, res)=>{
    const {email, password} = req.body
    const user = new User({email, password})
    await user.save()
    res.json({user})
    return user
}

ctrl.mostrarUsuarios = async (req, res)=>{
    const user = await User.find()
    res.json({user})
    return user
}

module.exports = ctrl;