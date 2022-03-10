import React, { useState } from 'react'
import './newChat.css'

// Import icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
        {id:123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bruno Santos'},
    ]);

    const handleClose = () => {
        setShow(false)
    }
    return (
        <div 
            className="newChat"
            style={{left: show?0:-415}}
        >
           <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <KeyboardBackspaceIcon style={{color: '#FFF'}}/>
                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
           </div>
           <div className="newChat-list">
                {list.map((item, key) =>(
                    <div className="newChat-item" key={key}>
                        <img className="newChat-itemAvatar"src={item.avatar}/>
                        <div className="newChat-itemName">{item.name}</div>
                    </div>
                ))}
           </div>
        </div>
    );
}