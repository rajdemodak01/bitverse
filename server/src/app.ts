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
import { User } from "./models/User.js";
import Mentor from "./models/Mentor.js";
import Booking from "./models/Booking.js";

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
    // origin: "https://career-quest-nu.vercel.app",  // Adjust according to your frontend URL
    origin: "https://bitverse-eight.vercel.app/",  // Adjust according to your frontend URL
    methods: ["GET", "POST"]
  }
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({
//   origin: "https://bitverse-eight.vercel.app/", // Replace with your frontend URL
//   credentials: true
// }));
// app.use(cors({
//   origin: "*", // Allow all origins
//   credentials: true,
// }));
app.use(cors())

app.use(morgan("dev")); // Uncomment if you want logging

app.post(
  '/api/webhook',bodyParser.raw({ type: 'application/json' }),handleWebhook);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.post("/api/profile", async (req, res) => {
  console.log("profile called")
  try {
    const { clerkUserId, email } = req.body;

    // Validate required fields
    if (!clerkUserId || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }else{
      console.log("here")
    }

    // Check if the user already exists
    let user = await User.findOne({ clerkUserId });

    if (user) {
      // Update the existing user profile
      user.set(req.body);
      await user.save();
      console.log("one user found")
      return res.status(200).json({ message: "Profile updated successfully", user });
    }

    // Create a new user profile
    user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Profile created successfully", user });
    console.log("profile created successfully");


  } catch (error) {
    console.log(error)
    console.error("Error handling profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/profile/:clerkUserId", async (req, res) => {
  console.log("🚀 Route hit: GET /api/profile/:clerkUserId");
  console.log("🔍 Request Params:", req.params);

  try {
    const { clerkUserId } = req.params;
    
    if (!clerkUserId) {
      return res.status(400).json({ error: "Missing clerkUserId" });
    }
    
    const user = await User.findOne({ clerkUserId });
    console.log("🔍 User found:", user);
    
    if (!user) {
      
      console.log(`📌 Extracted clerkUserId: ${clerkUserId}`);
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/mentors", async (_req, res) => {
  const mentors = await Mentor.find();
  res.json(mentors);
});
app.post("/api/mentors", async (req, res) => {
  try {
    const { name, profileUrl, about } = req.body;

    if (!name || !profileUrl || !about) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMentor = new Mentor({ name, profileUrl, about });
    await newMentor.save();

    res.status(201).json({ message: "Mentor added successfully", mentor: newMentor });
  } catch (error) {
    console.error("Error adding mentor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Book a mentor
app.post("/api/book", async (req, res) => {
  const { userId, mentorId, date, time } = req.body;
  if (!userId || !mentorId || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBooking = new Booking({ userId, mentorId, date, time });
  await newBooking.save();
  res.json({ message: "Booking successful!" });
});

// Get user bookings
app.get("/api/bookings/:userId", async (req, res) => {
  const { userId } = req.params;
  const bookings = await Booking.find({ userId }).populate("mentorId");
  res.json(bookings);
});

app.get("*", (req, res) => {
  console.log("returning from * ");
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
