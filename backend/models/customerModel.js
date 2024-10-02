const mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
              .then(() =>console.log('db connection successful'))
              .catch(() => console.log('database connection faied'));

 const CustomerSchema = new mongoose.Schema({
      name: {
       type: String,
       required: true,
       unique: true
    },
      password: {
        type: String,
        required: true,
    },
      Tel: {
        type: Number,
      },
      Email:{
        type: String
      }
 },{
    timestamps: true
 });


 const customer = mongoose.model('customers', CustomerSchema);

module.exports = customer;