import type { Request,Response } from "express";
import bcrypt from 'bcrypt'
import { createUser } from "../queries/insert.js";
import { getUserByEmail } from "../queries/select.js";
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config({path:".env"})


export const signUpHandler = async(req:Request,res:Response) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);
    try{
        await createUser({
            name,
            email,
            password:hashedPassword
        })
        
        res.status(201).json({
            message: "User created",
            name,
            email,
        })
    }
    catch(error:any){
      console.error(error)
        if(error.code === '23505'){
            return res.status(409).json({
                message: "User already exists"
            })
        }

        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export const signInHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
  return res.status(400).json({
    message: "Email and password are required",
  });
}

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const isValid = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  
   const token = jwt.sign(
    { id: existingUser.id, email: existingUser.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  res.json({ token, 
    message: "Login successful"
 });
};
