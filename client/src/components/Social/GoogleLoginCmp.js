import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { sendUserDataToServer } from "../../api/login/userServerApi";
import { sendUserDataToStorage } from "../../api/login/userStoreApi";
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

    const googleOk = (data) => {
        console.log("🚀 ~ file: GoogleLoginCmp.js ~ line 23 ~ GoogleLoginCmp ~ data", data)
        sendUserDataToStorage(data);
        sendUserDataToServer(data);
        cont.sendUserDataToState(data);
        console.log('🚀 ~ file: GoogleLoginCmp.js ~ line 28 ~ googleOk ~ cont.userData', cont.userData);
    }
    return (
        <GoogleLogin
            clientId={GoogleID}
            render={renderProps => { return GoogleButton({ renderProps }) }}
            onSuccess={(data) => { googleOk(data) }}
            onFailure={(err) => { console.log("Login filed", err) }}
            cookiePolicy={'single_host_origin'}
        />
    )
}



