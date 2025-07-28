import { NextFunction,Request,Response } from "express";
import User from "../models/Users.js";
import {hash} from "bcrypt";
//get all users from the db 

export const getAllUsers = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
   try{
       const users = await User.find();
       return res.status(200).json({message:"OK",users})
   }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message}); 
   }

}

//create user signup 
export const userSignUp = async(
    req:Request,
    res:Response,
    next:NextFunction
) => {
   try{
        //user signup
        const {name,email,password} = req.body; 
        const hashedPassword = await hash(password,10);
        //create a new user instance in the db
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });
        await user.save();
        return res.status(200).json({message :"OK",id:user._id.toString()});
   }catch(error){
        console.log(error);
        return res.status(200).json({message:"ERROR",cause:error.message}); 
   }

}