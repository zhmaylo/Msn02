import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleID } from '../../const/socialConst';
import "./GoogleFaceLoginCmp.css"
import { login } from "../../api/loginApi";

const GoogleButton = ({ renderProps }) => {
    return (< span
        className='bi-google iconButton'
        href="/"
        onClick={() => { renderProps.onClick() }}
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



