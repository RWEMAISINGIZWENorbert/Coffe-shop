const product = require('../models/productModel');
const mongoose = require('mongoose');

const getAllProducts = async (req,res) => {
    const allProducts = await product.find({});
    try{
       return res.status(200).json({
        status: 'success',
        data: allProducts
    })

    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const getOneProducts =  async (req,res) => {
    const id = req.params.id;
    const data = await product.findById(id)

    try{
       return res.status(200).json({
           status: 'succes',
           data
       })
    }catch(err){
       return res.status(200).json({
           status: 'failed',
           message: err
       })
    }
}

const createProducts = async (req,res) => {
    let newProduct = req.body;
    // if(!newProduct.name || !newProduct.image || !newProduct.price || !newProduct.description){
    //     return res.status(400).json({
    //         status: 'fail',
    //         message: "Fill the invalif field"
    //     });
    // }
    const createProduct = await product.create(newProduct);
    try{
        await createProduct;
        return res.status(201).json({
            status: 'succes',
            data: newProduct
        })

    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        });
    }

}

const updateProducts =  async (req,res) => {
    const id = req.params.id;
    const data = req.body;
    const updateProduct  = await product.findByIdAndUpdate(id, data, {new: true});

    try{
        await updateProduct;
        return res.status(200).json({
            status: 'succes',
            updateProduct
        })

    }catch(err){
        return res.status(400).json({
            status: 'success',
            message: err
        })
    }
}

const deleteProducts = async (req,res) => {
    const id = req.params.id;
    const deleteProducts = await product.findByIdAndDelete(id);
    try{
         await deleteProducts;
        return res.status(200).json({
            status: success,
            deleteProducts
        })

    }catch(err){
        return res.status(204).json({
            status: 'success'
        })
    } 
}

module.exports = {
    getAllProducts,
    getOneProducts,
    createProducts,
    updateProducts,
    deleteProducts
}