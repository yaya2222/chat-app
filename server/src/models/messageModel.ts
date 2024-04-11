import { InferSchemaType, Schema, model } from "mongoose";

const messageSchame = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: { type: String, trim: true },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);

type MessageType = InferSchemaType<typeof messageSchame>;

export default model<MessageType>("Message", messageSchame);
