

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage } from '../store/slices/authSlice';
import '../styles/styles-generic.scss';

const Messenger = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.auth.messages);
  const user = useSelector((state) => state.auth.user);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSend = () => {
    if (text.trim()) {
      const message = { sender: user.name, text };
      dispatch(sendMessage(message));
      setText('');
    }
  };

  return (
    <div className="messenger-container">
      <h2>Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === user.name ? 'sent' : 'received'}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="message-input">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a message..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Messenger;
