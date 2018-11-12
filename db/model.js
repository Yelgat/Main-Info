const mongoose = require('mongoose'); // Do I need this???
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
	console.log('Yelgat Main database HELLA connected');
});

const yelgatMainSchema = mongoose.Schema({
	id: { type: Number, unique: true },
	companyName: String,
	type: String,
	numberOfStars: Number,
	numberOfReviews: Number,
	numberOfDollarSigns: Number,
	typeOfCompany: String
});
 
const YelgatMainModel = mongoose.model('Yelgat_Main', yelgatMainSchema);

const findAll = (cb) => {
	YelgatMainModel.find({}).exec(cb);
}

const findStore = (store, cb) => {
	YelgatMainModel.find(store).exec(db);
}

const insertMany = (data, cb) => {
  YelgatMainModel.insertMany(data, cb);
};

exports.findAll = findAll;
exports.findStore = findStore;
exports.insertMany = insertMany;