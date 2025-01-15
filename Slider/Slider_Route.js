const express = require('express');

const { getSlider, addSlider, deleteSlider, updateSlider } = require('./Slider_Controller');

const route = express.Router();

route.get('/getslider', getSlider);

route.post('/postslider', addSlider);

route.delete('/deleteslider/:id', deleteSlider);

route.put('/putslider/:_id', updateSlider);


module.exports = route;