const path = require('path');

const express = require('express');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

// Call middleware 404
app.listen(3000);
