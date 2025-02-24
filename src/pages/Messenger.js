import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../store/slices/authSlice'
import '../styles/styles-generic.scss'


const Messenger = () => {
    const dispatch = useDispatch();
    const messages = useSelector( (state) => state.auth.messages);
    const user = useSelector((state) => state.auth.user);
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            dispatch(sendMessage({ sender: user.name, text}));
            setText('');
        }
    } 


  return (
    <div className='messanger-container'>
        <h2>Chat</h2>
        <div className='messages'>
            {
                messages.map( (message, index) => (
                    <p key={index} className={message.sender === user.name ? 'sent' : 'received'}>
                        <strong>{message.sender}:</strong> {message.text}
                    </p>
                ))
            }
        </div>
        <div className='message-input'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='text a message...' />
            <button onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default Messenger