import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, SignUpSchemaType } from "../../lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../InputForm";
import { useUser } from "../../hooks/useusers";
import toast from "react-hot-toast";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const {signup} = useUser()


  const images = watch("image");
  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    const file = data.image[0];
    if (file&& !(file as File).type.startsWith("image")) {
      setError("image", { message: "Only image" });
    } else {
     const res = await signup(data)
     if(res.status){
      toast.success(`Welcome ${res.data?.name}`)
     }else{
      toast.error(res.message)
     }
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <InputForm
          register={register}
          name="name"
          isRequired
          placeholder="Enter name"
          title="Name"
          type="text"
          error={errors.name}
          changeType={false}
        />
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
        <InputForm
          register={register}
          name="confirmPassword"
          isRequired
          placeholder="Enter confirm password"
          title="Confirm Password"
          type="password"
          error={errors.confirmPassword}
          changeType={true}
        />
        <div className="w-64 flex">
          <label htmlFor="image">
            <div className="ring-2 bg-blue-400 p-2 space-x-2">
              <span className="text-white">Upload image</span>
              {images && images[0] && images[0].name && (
                <span className="">{images[0].name}</span>
              )}
            </div>
          </label>
          <input
            type="file"
            id="image"
            hidden
            {...register("image")}
            aria-label="File Upload"
            accept="image/png, image/jpeg"
            className="file:bg-red-5020"
          />
          <img src={images&&images[0]?URL.createObjectURL(images[0]):"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} alt="Uploaded"  className=" ml-3 object-cover h-10 w-10 rounded-full"/>
          {errors.image && (
            <div className="p-2 text-red-600 text-sm text-start">
              {errors.image.message as string}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 w-full p-2 rounded-lg text-white font-semibold hover:ring-2 hover:bg-blue-700 disabled:bg-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
