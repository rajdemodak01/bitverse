import mongoose from "mongoose";

const ChatMessageSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk user ID
  sessionId: { type: String, required: true },
  sender: { type: String, enum: ["user", "bot"], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);
export default ChatMessage;
