import bcrypt from "bcrypt"

export const bcryptPassword = (password:string)=>{
    const salt = bcrypt.genSaltSync(10)
    const newPassword = bcrypt.hashSync(password,salt)
    return newPassword
}

export const matchPassword = (password:string,passwordDb:string)=>{
    return bcrypt.compareSync(password,passwordDb)
}