import React from 'react';
import Api from '../Api';
import './login.css'

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();

        if(result){

        } else {
            alert("Erro!")
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
}