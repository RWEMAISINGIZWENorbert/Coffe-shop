const customer = require('../models/customerModel');
const mongoose = require('mongoose');

const getAllCustomer = async (req,res) => {
    const Allcustomers = await customer.find({});

    try{
      await Allcustomers;
         return res.status(200).json({
             status: 'succes',
             data: Allcustomers 
    })
    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const getOneCustomer = async (req,res) => {
    const id = req.params.id;
    const findCustomer = await customer.findById(id);
    try{
        return res.status(200).json({
            status: 'OK',
            data: findCustomer
        })
    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const postCustomer =  async (req,res) => {    
    const newCustomer = req.body;
    if(!customer.name) {
     return res.status(400).json({
         status: 'fail',
         messsage: 'Invalid name'
     })
    }
 
    const createCustomer = new customer(newCustomer);
    try{
     await createCustomer.save();
     return  res.status(201).json({
         status: 'success',
         data: newCustomer
     });
    }catch(err){
     return res.status(400).json({
         status: 'fail',
         message: err
     })
    }
 }

const updateCustomer =  async (req,res) => {
    const id = req.params.id 
    const customers = req.body;
    try{
        await customer.findByIdAndUpdate(id, customers, {new: true});

        // if(!mongoose.Types.ObjectId.isValid(id)){
        //     return res.status(400).json({status:'fail', messsage: 'Invalid id'});
        // }

        return res.status(200).json({
            status: 'succes',
            message: "Update is successful done",
            data: customers
        });

    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const deleteCustomer = async (req,res) => {
  
    const id = req.params.id;
    const deleteCustomer = customer.findByIdAndDelete(id, {new: true});

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(400).json({status:'fail', messsage: 'Id is not invalid'});
    // }
    try{        
        await  deleteCustomer;
           return res.status(204).json({
           status: 'succes',
     })   

    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

module.exports = {
    getAllCustomer,
    getOneCustomer,
    postCustomer,
    updateCustomer,
    deleteCustomer
}