const Product = require('../models/product');
const Family = require('../models/family');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    // SELECT * FROM products
    Product.findAll()
    .then(products => {
        // console.log(products);
        res.render('admin/products', {
            // prods: products,
            products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    })
    .catch(err => console.log(err));
    
}

exports.getCategory = (req, res, next) => {
    // SELECT * FROM category
    Category.findAll()
    .then(category => {
        // console.log(category);
        res.render('admin/category', {
            // prods: category,
            category,
            pageTitle: 'Admin category',
            path: '/admin/category'
        });
    })
    .catch(err => console.log(err));
    
}

exports.getFamilies = (req, res, next) => {
    // SELECT * FROM products
    Family.findAll()
    .then(family => {
        // console.log(products);
        res.render('admin/families', {
            // prods: products,
            family,
            pageTitle: 'Admin Family',
            path: '/admin/families'
        });
    })
    .catch(err => console.log(err));
    
}