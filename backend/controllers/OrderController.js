const order = require('../models/ordersModels');
const products  = require('../models/productModel');
const customer = require('../models/customerModel');


const createOrder = async (req,res) => {
    const newOrder = req.body;
    const findOrder = await products.findOne({name: newOrder.products});

    if(!findOrder) return res.status(404).json({status: 'fail', message:"The prodct name is not found"});
    
    const createOrder = new order(newOrder);

    try{
     await createOrder.save();
     return  res.status(201).json({
         status: 'success',
         data: newOrder
     });
    }catch(err){
     return res.status(400).json({
         status: 'fail',
         message: err
     })
    }
  }

 const getAllOrders =async (req,res) => {

    const data = await order.find({});
       try{
         return res.status(200).json({
             status: 'success',
             data
         })

       }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const updateOrder =  async (req,res) => {
    const newOrder = req.body;
    const id = req.params.id
  
    const updateOrder = order.findByIdAndUpdate(id, newOrder, {new: true});
    try{
     await updateOrder;
     return  res.status(201).json({
         status: 'success',
         data: newOrder
     });
    }catch(err){
     return res.status(400).json({
         status: 'fail',
         message: err
     })
    }
  }

  const deleteOrder = async (req,res) => {
    const id = req.params.id
  
    const deleteOrder = order.findByIdAndDelete(id);
    try{
     await deleteOrder;
     return  res.status(204).json({
         status: 'success',
     });
    }catch(err){
     return res.status(400).json({
         status: 'fail',
         message: err
     })
    }
  }

  module.exports = {
    createOrder,
    getAllOrders,
    updateOrder,
    deleteOrder,
  }