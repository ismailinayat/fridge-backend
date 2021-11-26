const path = require('path');
const express = require('express');


const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true

}

const app = express();

app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;
