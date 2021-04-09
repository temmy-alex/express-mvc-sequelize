// const path = require('path');

const express = require('express');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const Category = require('./models/category');
const Family = require('./models/family');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// Grouping Prefix Routes
app.use('/admin', adminRoutes);

// Call middleware 404
app.use(errorController.get404);

sequelize.sync()
  // .then(Product.create({ title: 'Produk 5', description: 'Deskripsi 5', imageUrl: 'placeholder.com/150', price: 10000 }))
  .then(app.listen(3000))
  .catch(err => {
  console.log(err);
});
