import { SignUpSchemaType } from "../lib/zod";
import { registerURL } from "./setting";


export function useUser() {

    async function signup(data: SignUpSchemaType) {
        console.log(data.image[0]??undefined);
        const body = {
            name: data.name,
            email: data.email,
            password: data.password,
            pic: data.image[0]??undefined
        }
        console.log(data);
        try {
            const response = await fetch(registerURL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                            
            console.log(await response.json());

        } catch (error) {
            console.log(222222222222222);
            
            console.log(error);

        }
    }


    return { signup }
}