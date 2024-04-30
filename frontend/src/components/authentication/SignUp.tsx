import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, SignUpSchemaType } from "../../lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });


  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    console.log(data);
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col text-start gap-1">
    <label htmlFor="username" className="text-sm text-gray-600">Username:</label>
        <input id="username" placeholder="Enter username" type="text" {...register} className="border border-blue-300 p-2 rounded-lg"/>
        </div>
      </form>
    </div>
  );
}
