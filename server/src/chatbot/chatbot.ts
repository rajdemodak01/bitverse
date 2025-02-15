
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
// dotenv.config({ path: "./.env" });

// Resolve the path to the .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../../.env') });

import { v4 as uuidv4 } from 'uuid';
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";



// Define the type for chat history storage
interface MessageHistory {
  [sessionId: string]: InMemoryChatMessageHistory;
}

// Store session chat histories
const messageHistories: MessageHistory = {};
console.log(process.env.GOOGLE_API_KEY)

// Initialize the chatbot model
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  maxOutputTokens: 2048,
  // apiKey: process.env.GOOGLE_API_KEY,
});

// Define the chatbot prompt
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are an AI career counselor designed to assist school students with career guidance. Provide clear and helpful responses in under 20 words. If you need additional information for better advice, ask one question at a time. If unsure about something, respond with "I’m not sure about that." Use the chat history and current input to tailor your guidance. Ensure your responses are supportive and encourage students to explore their interests further. Always prioritize clarity and relevance in your answers.
    `,
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

// Define the chain that connects the prompt to the model
const chain = prompt.pipe(model);

// Define the function to manage chat history and session
const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory: async (sessionId: string) => {  // Explicitly typing sessionId
    if (messageHistories[sessionId] === undefined) {
      messageHistories[sessionId] = new InMemoryChatMessageHistory();
    }
    return messageHistories[sessionId];
  },
  inputMessagesKey: "input",
  historyMessagesKey: "chat_history",
});

// Function to handle chatbot logic
import ChatMessage from "../models/ChatMessage.js";

// Function to handle chatbot logic
export async function handleChat(userInput: string, sessionId: string, userId: string) { 
  // Fetch previous chat messages for this user
  const chatHistory = await ChatMessage.find({ userId }).sort({ timestamp: 1 });

  // Format history for LangChain
  const formattedHistory = chatHistory.map(msg => ({
    role: msg.sender === "user" ? "human" : "system",
    content: msg.text,
  }));

  // Process chatbot response with chat history
  const response = await withMessageHistory.invoke(
    { input: userInput, chat_history: formattedHistory },
    { configurable: { sessionId } }
  );

  // Save user message in MongoDB
  await ChatMessage.create({ userId, sessionId, sender: "user", text: userInput });

  // Save bot response in MongoDB
  await ChatMessage.create({ userId, sessionId, sender: "bot", text: response.content });

  return response.content;
}


// Function to generate a new session ID
export function createNewSession(): string {  // Return type explicitly declared
  return uuidv4();
}
