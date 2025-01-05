// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './LoveNotes.css';
import axios from '../Api';

function LoveNotes() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    axios.get('/messages').then((res) => setMessages(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = { content: newMessage, sender: 'You' };
    await axios.post('/messages', message);
    setMessages((prev) => [...prev, message]);
    setNewMessage('');
  };

  return (
    <div className="love-notes">
      <h2 className="section-title">Love Notes</h2>
      <div className="message-list">
        {messages.map((msg, idx) => (
          <p key={idx} className="message">
            {msg.content}
          </p>
        ))}
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a note..."
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default LoveNotes;