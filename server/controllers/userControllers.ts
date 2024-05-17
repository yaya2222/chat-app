import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../src/models/userModel"
import { generateToken } from "../utils/generateToken";
import { bcryptPassword, matchPassword } from "../utils/handlePassword";
import cloudinary from "../config/cloudinary";
import { uploadToCloudinary } from "../utils/uploadImage";

interface registerUserBody {
   name?:string,
   email?:string,
   password:string,
}

const registerUser: RequestHandler<unknown,unknown,registerUserBody,unknown> = asyncHandler(async (req, res) => {
    const pic = req.file
    const { name, email, password} = req.body


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
    let urlImage: string | undefined = undefined
    if (pic) {
        urlImage = await uploadToCloudinary(pic.path)
    }

    const user = await userModel.create({
        name, password: newPassword, email, pic: urlImage
    })


    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id)
    })
    res.status(200).send(123)
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