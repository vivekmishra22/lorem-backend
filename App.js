const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Lorem");

const route = require('./Route');
const Slider_route = require('./Slider/Slider_Route');

app.use('/', route);
app.use('/', Slider_route);

app.get(('/'), (req, res) => 
    res.send("Database connected!!")
);

app.listen(8000, () => {
    console.log(`App listening on port 8000`);
})