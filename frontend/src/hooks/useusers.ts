import { SignUpSchemaType } from "../lib/zod";
import { serverErrorType, userType } from "../type";
import { registerURL } from "./setting";


export function useUser() {

    async function signup(data: SignUpSchemaType) {
        const formData = new FormData()
        formData.append("file", data.image[0] ?? undefined)
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("password", data.password)
        try {
            const response = await fetch(registerURL, { method: "POST", body: formData })
            const res: serverErrorType | userType = await response.json()
            if (response.ok) {
                const user = res as userType
                return { status: true,message:null, data: user }
            } else {
                const error = res as serverErrorType
                return { status: false, message: error.message,data:null }
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Something fail", data:null }

        }
    }


    return { signup }
}