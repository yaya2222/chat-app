import { useState } from "react"
import Login from "../components/authentication/Login"
import SignUp from "../components/authentication/SignUp"

export default function HomePage() {

  const [isPageLogin,setIsPageLogin] = useState<boolean>(true)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-white w-[450px] mt-5 p-3 rounded-xl  text-center">
        <h1 className="text-4xl">Talk-A-Tive</h1>
      </div>
      <div className="bg-white w-[450px] mt-3 p-4 rounded-xl text-center ">
        <div className="flex justify-center gap-5">
          <button onClick={()=>setIsPageLogin(true)} className={` py-2 w-full rounded-2xl hover:bg-blue-100 ${isPageLogin?"bg-blue-200":""}`}>Login</button>
          <button onClick={()=>setIsPageLogin(false)} className={` py-2 w-full  rounded-2xl hover:bg-blue-100 ${!isPageLogin?"bg-blue-200":""}`}>Register</button>
        </div>
        <div>
          {isPageLogin?<Login/>:<SignUp/>}
        </div>
      </div>
    </div>
  )
}