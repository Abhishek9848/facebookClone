const { validateEmail, checkUserName } = require("../helpers/validation");
const User = require("../model/user")
const {hash} = require('bcrypt')

exports.register =async (req, res) => {
    try{
        if(!validateEmail(req.body.email)){
            return res.status(400).send({message:"Invalid Email Id"})
        }
        const check = await User.findOne({email:req.body.email})
        if(check){
            return res.status(400).send({message:"Email already exist! try with another email id"})
        }
        const hashedPassword =await  hash(req.body.password , 12)
        const tempUserName = req.body.firstName + req.body.lastName
        console.log("tempUserName---" , tempUserName)
        let newUserName = await checkUserName(tempUserName)
        const user = new User({...req.body ,userName:newUserName,password:hashedPassword})

        const savedUser =await  user.save();
        res.status(201).send({
            success: true,
            data:savedUser,
            message:"User created successfully"
        })
    }catch(err){
        console.log(err)
    }
}