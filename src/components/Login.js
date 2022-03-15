import React from 'react';
import Api from '../Api';
import './login.css'

export default ({onReceive}) => {

    const handleGoogleLogin = async () => {
        
        let result = await Api.googleLogar();
        console.log(result)

        if(result){
            onReceive(result.user);
            console.log(result)
        } else {
            alert("Erro!")
            console.log("nao deveria estar")
        }
        console.log("ultimo")
    }

    return (
        <div className="login">
            <button onClick={handleGoogleLogin}>Logar com Google</button>
        </div>
    );
}