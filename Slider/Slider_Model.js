const mongoose = require('mongoose')

const Slider = mongoose.Schema({
    sliderHeading:String,
    sliderDescription:String
})

module.exports = mongoose.model('slider', Slider);