import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // Ensure correct path to .env file

import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import { Server } from "socket.io";
import { errorMiddleware } from "./middlewares/error.js";
import { handleChat, createNewSession } from "./chatbot/chatbot.js";
import { connectDB } from "./db/connectDb.js";
import bodyParser from 'body-parser';
import { handleWebhook } from "./controllers/webhook.js";
import ChatMessage from "./models/ChatMessage.js";

// Configuration
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

// Create Express app
const app = express();
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Create HTTP server and Socket.io server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    credentials: true,
    origin: "https://career-quest-nu.vercel.app",  // Adjust according to your frontend URL
    methods: ["GET", "POST"]
  }
});

// Middleware setup
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://career-quest-nu.vercel.app", // Replace with your frontend URL
  credentials: true
}));

app.use(morgan("dev")); // Uncomment if you want logging

app.post(
  '/api/webhook',bodyParser.raw({ type: 'application/json' }),handleWebhook);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Catch-all route for 404
app.get("*", (req, res) => {
  if (req.path.startsWith('/socket.io')) return;
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// Error handling middleware
app.use(errorMiddleware);

// Socket.io event handling
io.on("connection", async (socket) => {
  console.log("User connected");

  socket.on("getPreviousMessages", async (userId) => {
    try {
      const previousMessages = await ChatMessage.find({ userId }).sort({ timestamp: 1 });
      socket.emit("previousMessages", previousMessages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  });

  socket.on("userMessage", async ({ text, userId }) => {
    try {
      let sessionId = createNewSession(); // Generate sessionId if needed

      // Process message and get bot response
      const botResponse = await handleChat(text, sessionId, userId);

      // Send bot response to client
      socket.emit("botResponse", botResponse);
    } catch (error) {
      console.error("Error handling user message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


// Start function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    server.listen(port, () => console.log(`Server is working on Port:${port} in ${envMode} Mode.`));
  } catch (error) {
    console.error('Error connecting to database or starting server:', error);
  }
};

// Call start function
start();
