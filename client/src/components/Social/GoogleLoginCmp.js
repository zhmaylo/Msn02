import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { sendUserDataToServer, sendUserDataToStorage } from "../../api/loginApi";
import { GoogleID } from '../../const/socialConst';
import { Context } from "../../context/Context";
import "./GoogleFaceLoginCmp.css"


const GoogleButton = ({ renderProps }) => {
    return (< span
        className='bi-google iconButton'
        href="/"
        onClick={() => { renderProps.onClick() }} style={{ fontSize: 30 }}
    > </span>)
};

export const GoogleLoginCmp = () => {
    const cont = useContext(Context)
    return (
        <GoogleLogin
            clientId={GoogleID}
            render={renderProps => { return GoogleButton({ renderProps }) }}
            onSuccess={(data) => {
                console.log("🚀 ~ file: GoogleLoginCmp.js ~ line 23 ~ GoogleLoginCmp ~ data", data)
                sendUserDataToStorage(data);
                sendUserDataToServer(data);
                cont.sendUserDataToState(data);
            }
            }
            onFailure={(err) => { console.log("Login filed", err) }}
            cookiePolicy={'single_host_origin'}
        />
    )
}



