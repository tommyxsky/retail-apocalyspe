const mongoose = require('mongoose');

const Store = mongoose.model('Store'); // add this line

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};

exports.addStore = (req, res) => {
	res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    await store.save();
    res.redirect('/');
};
