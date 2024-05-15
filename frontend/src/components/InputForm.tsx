import { useState } from "react";
import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
type InputFormProps<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  title: string;
  register: UseFormRegister<T>;
  isRequired: boolean;
  changeType: boolean;
  error: FieldError | undefined;
};

export default function InputForm<T extends FieldValues>({
  type,
  placeholder,
  changeType,
  error,
  isRequired,
  name,
  register,
  title,
}: InputFormProps<T>) {
  const [typeInput, setTypeInput] = useState<string>(type);

  const handleType=()=>{
if(typeInput===type){
    setTypeInput("text")
}else{
    setTypeInput(type)
}
  }
  return (
    <div className="flex flex-col text-start gap-1">
      <label htmlFor={name}>
        <span className="text-sm text-gray-600 font-semibold">{title}</span>{" "}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <div className="w-full flex p-2 border border-blue-300 rounded-lg focus-within:border-2 ">
      <input
        id={name}
        placeholder={placeholder}
        type={typeInput}
        {...register(name)}
        className="focus:outline-none w-full"
        />
      {changeType&&<div onClick={handleType} className="flex text-center items-center px-2 text-xl text-gray-500">{typeInput===type?<AiFillEye className="cursor-pointer"/>:<AiFillEyeInvisible className="cursor-pointer"/>}</div>}
        </div>
      {error&&<div className="p-2 text-red-600 text-sm">{error.message}</div>}
    </div>
  );
}
