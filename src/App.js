import React, { useState, useEffect } from 'react';
import './App.css';

//import icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

// import components
import ChatListItens from './components/ChatListItens';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

export default () => {

    const [chatlist, setChatlist] = useState([
        {chatId: 1, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {chatId: 2, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {chatId: 3, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {chatId: 4, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    ])
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);

    const [showNewChat, setShowNewChat] = useState(false);
    const handleNewChat = () => {
        setShowNewChat(true);
    }

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };
        //
        console.log(newUser)
        setUser(newUser);

    }

    if(user === null){
       return (
            <Login onReceive={handleLoginData} />
       ); 
    }

    return (
        
        <div className="app-window">
            <div className="sidebar">
                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <header>
                    <img className="header-avatar" src="" alt="Profile" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div onClick={handleNewChat} className="header-btn">
                            <ChatIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-btn">
                            <MoreVertIcon style={{ color: '#919191' }} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className='search-input' >
                        <SearchIcon font-fontSize="small" style={{ color: '#919191' }} />
                        <input type="search" placeholder="Procuar ou começar uma nova conversa" />
                    </div>
                </div>
                <div className="chatlist">
                    {chatlist.map((item, key) => (
                        <ChatListItens
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>
            </div>
            <div className='contentarea'>
                {activeChat.chatId !== undefined &&
                    <ChatWindow 
                        user={user}
                    />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }   
            </div>
        </div>
    );
}