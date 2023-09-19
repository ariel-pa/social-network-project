import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
 
export const register = async (req, res) =>{
    try {
       const userData = {
        firsName,
        lastname,
        email,
        password,
        picturePath,
        friends,
        location,
        occupation,
       } = req.body;

       //TODO: investigar gensalt()
       const salt = await bcrypt.genSalt();
       const passwordHash = bcrypt.hash(password, salt);

       const newUser = new User({
        ...userData,
        password: passwordHash,
        viewdProfile: Math.floor(Math.random() *  10000),
        impressions: Math.floor(Math.random() *  10000),
       });

       const saveUser = await newUser.save();
       res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

/* LOGIN */
export const login = async(req, res)=>{
    try {
        const {email, password} =req.body;
        const user = await User.findOne({ email: email});
        if(!user) return res.status(400).json({message: "El usuario no existe. "});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Credenciales ivalidos. "});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}