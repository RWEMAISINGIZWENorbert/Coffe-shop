
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
              .then(() =>console.log('db connection successful'))
              .catch(() => console.log('database connection faied'));

              const ProductSchema = new mongoose.Schema({
                name: {
                  type: String,
                  required: true
                },
                image: {
                  type: String,
                  required: true
                },
                price: {
                  type: String,
                  required: true,
                },
                description: {
                  type: String,
                  required: true
                }
           }, {
            timestamps: true
           })


  const product = mongoose.model('products', ProductSchema);  

module.exports = product;