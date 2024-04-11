import { InferSchemaType, Schema, model } from "mongoose";

const chatSchame = new Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
},{
    timestamps:true
});

type ChatType = InferSchemaType<typeof chatSchame>

export default model<ChatType>("Chat",chatSchame)