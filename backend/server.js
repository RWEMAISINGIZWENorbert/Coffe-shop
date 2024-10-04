const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT;
// const customer = require('./models/customerModel');
app.use(cors())
const customersRoutes = require('./routes/customersRoutes');
const productRoutes = require('./routes/productRoutes');
const ordersRoutes = require('./routes/OrdersRoutes')


app.use(express.json());

app.use('/api/customers', customersRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes)


// app.post('/api/auth/signUp',)

// app.post('/api/auth/login',)

app.listen(port, () => console.log(`Server is carried out on the port ${port}`));