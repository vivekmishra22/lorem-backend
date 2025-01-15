const express = require('express');

const { getuser, adduser, deleteuser, updateuser } = require('./Controller');

const route = express.Router();

route.get('/getuser', getuser);

route.post('/postuser', adduser);

route.delete('/deleteuser/:id', deleteuser);

route.put('/putuser/:_id', updateuser);


module.exports = route;