import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../src/models/userModel"
import { generateToken } from "../utils/generateToken";
import { bcryptPassword, matchPassword } from "../utils/handlePassword";


interface registerUserBody {
    name?: string,
    password?: string,
    email?: string,
    pic?: File
}

const registerUser: RequestHandler<unknown, unknown, registerUserBody, unknown> = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body
    console.log({ name, email, password, pic });
    

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Plese enter all the fields")
    }
    const userExsit = await userModel.findOne({ email })

    if (userExsit) {
        res.status(400)
        throw new Error("User already exsits")
    }
    const newPassword = bcryptPassword(password)
    if(pic){

    }

    const user = await userModel.create({
        name, password: newPassword, email, pic
    })


    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id)
    })
}
)

interface authUserBody {
    email?: string,
    password?: string
}

const authUser: RequestHandler<unknown, unknown, authUserBody, unknown> = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error("Plese enter all the fields")
    }
    const userExsit = await userModel.findOne({ email })

    if (!userExsit) {
        res.status(400)
        throw new Error("Invaild email or password")
    }

    if (!matchPassword(password, userExsit.password)) {
        res.status(400)
        throw new Error("Invaild email or password")
    }


    res.status(201).json({
        _id: userExsit._id,
        name: userExsit.name,
        email: userExsit.email,
        pic: userExsit.pic,
        token: generateToken(userExsit._id)
    })

})

export default { registerUser, authUser }