var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51ewP-q28%2BL._SL1000_.jpg',
        title: 'Roku 3',
        description: 'Digital Streaming Device!!',
        price: 100
    }),
    new Product({
        imagePath: 'http://www.uctv.tv/images/roku/instructions_rokubox3.jpg',
        title: 'Roku 2',
        description: 'Older Digital Streaming Device!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5X7CNjscXv2dTJVGyLprqyCQBGCjHAu7ZpRomMGWgigjbXJQP',
        title: 'Roku Streaming Stick',
        description: 'Small and Portable Digital Streaming Device!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://subscribe.nhl.com/sections/sell-page/images/appletv.jpg',
        title: 'Apple',
        description: 'Apple TV Digital Streaming Device!!',
        price: 150
    }),
    new Product({
        imagePath: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/larger/public/article_images/2014/04/amazon_fire_tv.jpg?itok=7-mnXOaP',
        title: 'Amazon Fire TV',
        description: 'Amazon\'s Flagship Digital Streaming Device!!',
        price: 90
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51SvLFqkerL._SL1000_.jpg',
        title: 'Amazon Fire TV Stick',
        description: 'Amazon\'s Portable Digital Streaming Device!!',
        price: 40
    }),

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

