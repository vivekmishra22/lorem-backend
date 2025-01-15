const mongoose = require('mongoose')

const Register = mongoose.Schema({
    name:String,
    mobile:Number,
    address:String,
    product:String
})

module.exports = mongoose.model('User', Register);