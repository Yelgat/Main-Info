const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3005;
const DB_ADDRESS = process.env.DB_ADDRESS || 'localhost:27017';

const db = require('../db/model.js');

mongoose.connect(`mongodb://${DB_ADDRESS}/Yelgat_Main`, {}, console.log);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/r/:namecitynumber', (req, res) => {
	db.findStore(req.params.namecitynumber, (err, results) => {
		(err) ? res.send(404).send(`Cannot find store ${req.params.namecitynumber}`) : res.json(results);
	});
});

app.listen(port, () => console.log(`Listening on ${port}`));
