import { useUser } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const socket = io(import.meta.env.VITE_BACKEND_URL, {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const { user } = useUser();
  const [avatar, setAvatar] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if (!user) return null;

  useEffect(() => {
    setAvatar(user.imageUrl);

    // Fetch previous messages when user connects
    socket.emit("getPreviousMessages", user.id);

    // Listen for previous messages from backend
    socket.on("previousMessages", (prevMessages) => {
      setMessages(prevMessages);
    });

    // Listen for bot responses
    socket.on("botResponse", (response) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
      setLoading(false);
    });

    return () => {
      socket.off("previousMessages");
      socket.off("botResponse");
    };
  }, []);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    socket.emit("userMessage", { text: input, userId: user.id });

    setInput('');
    setLoading(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl border rounded-lg shadow-lg bg-white mb-12" style={{ height: '650px' }}>
        <div className="p-4 overflow-y-auto" style={{ height: '570px' }}>
          {messages.map((message, index) => (
            <div key={index} className="flex items-center">
              {message.sender === 'user' ? (
                <>
                  <div className="chat chat-end m-5 w-full">
                    <div className="chat-bubble bg-[#b3cde0] text-black"> {message.text}</div>
                  </div>
                  <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
                </>
              ) : (
                <>
                  <img src="/bot.jpg" alt="Bot Avatar" className="w-10 h-10 rounded-full mr-2" />
                  <div className="chat chat-start">
                    <div className="chat-bubble bg-[#dde8e7] text-black"> {message.text}</div>
                  </div>
                </>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center">
              <img src="/bot.jpg" alt="Bot Avatar" className="w-10 h-10 rounded-full mr-2" />
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          )}
        </div>
        <div className="p-2 px-6 flex gap-2">
          <input
            type="text"
            className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
