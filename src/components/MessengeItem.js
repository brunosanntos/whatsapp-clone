import React from 'react';
import './MessengeItem.css';


export default ({data, user}) => {
    return (
        <div 
            className="messangeLine"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff'
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    );
}
