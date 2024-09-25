import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { JWT_PASSWORD } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";


export const signup = async (req:Request, res:Response, next: NextFunction) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const user = await prismaClient.user.findFirst({where:{email}})

    if(user){
        next(new BadRequestsException("User Already Exists", ErrorCode.USER_ALREADY_EXISTS))
    }

    else{
        const password_hash = bcrypt.hashSync(password, 10)
        await prismaClient.user.create({
            data:{
                username,
                email,
                password: password_hash
            }
        })

        res.json({
            status:"Success",
            message:"User Created Successfully"
        })
    }
}

export const login = async (req:Request, res:Response, next:NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password)

    let user = await prismaClient.user.findFirst({where:{email}})
    console.log(user)

    if(!user){
        next(new BadRequestsException("User Does not Exist", ErrorCode.USER_NOT_FOUND))
    }

    else if(bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({email}, JWT_PASSWORD)

        res.json({
            status:"Success",
            message:"Login Successfull",
            token
        })
    }
    else{
        next(new BadRequestsException("Incorrect Password", ErrorCode.INCORRECT_PASSWORD))
    }

}