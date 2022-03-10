import React, { useState, useEffect, useRef } from 'react'
import './ChatWindow.css'
import EmojiPicker from 'emoji-picker-react';
import MessengeItem from './MessengeItem';

// Import icones
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

export default ({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false)
    const [list, setList] =  useState([
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
        {author: 1234, body: 'Olá tudo bem?'},
        {author: 124,body: 'olá'},
        {author: 123,body: 'Queria saber como faço para criar um whatsapp'},
    
    ]);

    useEffect (()=>{
        if (body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji )
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if (recognition !== null){

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript);
            }

            recognition.start();
        }
    }
    const handleSendClick = () => {
        
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://www.w3schools.com/howto/img_avatar2.png"/>
                    <div className="chatWindow-name">Bruno Santos</div>
                </div>
                <div className="chatWindow-headerbutton">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>

            <div ref={body} className="chatWindow-body">
                {list.map((item, key) => (
                    <MessengeItem 
                        key = {key}
                        data = {item}
                        user = {user}
                    />
                ))}
            </div>

            <div className="chatWindows-emojiArea" style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">
                    <div className="chatWindow-btn" onClick={handleCloseEmoji} style={{width: emojiOpen?40:0}}>
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}}/>
                    </div>
                </div>

                <div className="chatWindow-inputarea">
                    <input 
                        className="chatWindow-input" 
                        type="txt"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>

                <div className="chatWindow-pos">

                    {text === '' && 
                        <div onClick={handleMicClick} className="chatWindow-btn">
                        <KeyboardVoiceIcon style={{color: listening ? '#126ece' : '#919191'}}/>
                    </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                    }
                </div>  
            </div>
        </div>
    )
}