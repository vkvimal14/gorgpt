import React, { useState } from 'react';
import axios from 'axios';

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessage = { role: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await axios.post('https://gorgptback.onrender.com/chat', { input });
      setMessages([...messages, newMessage, { role: 'model', text: response.data.text }]);
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chat with Gemini</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '10px 0' }}>
            <strong>{msg.role}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '80%', marginRight: '10px' }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
