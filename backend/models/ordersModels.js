const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const {format} = require('date-fns');
dotenv.config();
const port = process.env.PORT;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
              .then(() =>console.log('db connection successful'))
              .catch(() => console.log('database connection faied'));

 const CustomerSchema = new mongoose.Schema({
     customer:{
         type: String,
         required: false,
     },
    products: [String],

     Totprice: {
        type: String,
        required: true
     },
     summary: {
        type: String
     },
     date : {
        type: String,
        default: `${format(new Date(), 'yyyy:MM:dd\tHH:mm:ss:')}`
     }
 },{
    timestamps: true,
 });


 const order = mongoose.model('orders', CustomerSchema);

module.exports = order;