import { InferSchemaType, Schema, model } from "mongoose";

const userSchame = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

type UserType = InferSchemaType<typeof userSchame>;

export default model<UserType>("User", userSchame);
