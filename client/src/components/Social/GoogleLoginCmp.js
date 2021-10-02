import React from "react";
import GoogleLogin from "react-google-login";
import { login } from "../../api/loginApi";
import { GoogleID } from '../../const/socialConst';
import "./GoogleFaceLoginCmp.css"


const GoogleButton = ({ renderProps }) => {
    return (< span
        className='bi-google iconButton'
        href="/"
        onClick={() => { renderProps.onClick() }} style={{fontSize: 30}}
    > </span>)
};

export const GoogleLoginCmp = () => {
    return (
        <GoogleLogin
            clientId={GoogleID}
            render={renderProps => { return GoogleButton({ renderProps }) }}
            onSuccess={(data) => { login(data) }}
            onFailure={(err) => { console.log("Login filed", err) }}
            cookiePolicy={'single_host_origin'}
        />
    )
}



