import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema,LoginSchemaType } from "../../lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../InputForm";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
  console.log(data);
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <InputForm
          register={register}
          name="email"
          isRequired
          placeholder="Enter email"
          title="Email"
          type="email"
          error={errors.email}
          changeType={false}
        />
        <InputForm
          register={register}
          name="password"
          isRequired
          placeholder="Enter password"
          title="Password"
          type="password"
          error={errors.password}
          changeType={true}
        />
      
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 w-full p-2 rounded-lg text-white font-semibold hover:ring-2 hover:bg-blue-700 disabled:bg-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
