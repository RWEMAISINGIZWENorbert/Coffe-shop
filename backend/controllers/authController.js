const customer = require('../models/customerModel');
const bcrypt = require('bcrypt');
const { check } = require('express-validator');
const JWT = require('jsonwebtoken');

const handleSignUp= 
// [check('email').isEmail()], 
    async (req,res) =>{
    const username= req.body.name;
    const password = req.body.password;
    const cPassword = req.body.cPassword;
    const Tel = req.body.Tel;
    const email = req.body.email;
    if(password !== cPassword) return res.status(400).json({
        status: 'fail',
        message: "Your password does not match"
    });

    const hashedPassword = await bcrypt.hash(password, 10); 

    try{
     const createUser = await new customer({ name: username, password: hashedPassword, Tel: Tel, email: email});
     await createUser.save();

     const token = await JWT.sign({"username": username},
        "qwertyuiopasdfhjkllzxcvbnm",
        {expiresIn: 3600000000}
     )

     return res.status(201).json({
        status: 'success',
        data: createUser,
        token
     })

    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const handleLogin =  async (req,res) => {
    // const username = req.body.username;
    // const password = req.body.password;
   
    const {username, password} = req.body;
    if(!username || !password) return res.status(10).json({"message" : "username and password are required"});

    const findUser = await customer.findOne({name: username});

    if(!findUser) return res.status(400).json({"message" : "Invalid username and password"});

    const match = await bcrypt.compare(password, findUser.password);
    
    try{
        if(match) {return res.status(200).json({
            status: "succes",
            data: findUser
        })}else{
            return res.status(400).json({
                status: 'fail',
                message: 'Username and password those not match'
            })
        }
        
    }catch(err){
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

module.exports  = {
    handleLogin,
    handleSignUp
}