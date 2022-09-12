const express = require('express');
const app =  express();
const Db_connect = require('./db/Db_connect')
// const PORT = 5000
require('dotenv').config();
const PORT = process.env.PORT;


app.use(express.json())
app.use('/user', require('./routes/User'))

Db_connect();

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server is running');
})