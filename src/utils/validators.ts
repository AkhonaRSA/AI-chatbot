import { NextFunction,Request,Response } from "express";
import {body,ValidationChain, validationResult} from "express-validator";


export const validate = (validations: ValidationChain[]) => {
  return async (req:Request,res:Response,next:NextFunction) => {
    for(let validation of validations){
       const result = await validation.run(req);
       if(!result.isEmpty()){
        break;
       }

    }
    //verify if there was an error or not
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(422).json({erros : errors.array()});
  }
}

export const loginValidator = [
body("email").trim().isEmail().withMessage("Email is required"),
body("password").trim().isLength({min:6}).withMessage("Password shoud contain atleast 6 characters"),
];

export const signupValidator = [
body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator,
];

