const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3005;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Listening on ${port}`));