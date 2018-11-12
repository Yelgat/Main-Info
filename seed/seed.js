const data = require('./seed-data.js');
const mongoose = require('mongoose');
const Place = require('../db/model.js');
const DB_ADDRESS = process.env.DB_ADDRESS || 'localhost:27017';
mongoose.connect(`mongodb://${DB_ADDRESS}/Yelgat_Main`, {}, console.log);

const seedDB = (data) => {
	Place.insertMany(data, (err, res) => {
		if (err) {
			console.log('Nope', err);
			mongoose.disconnect();
		} else {
			console.log('Done!');
			mongoose.disconnect();
		}
	});
};

seedDB(data);
