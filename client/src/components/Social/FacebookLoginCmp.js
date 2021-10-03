import React, { useContext } from "react";
import FacebookAuth from 'react-facebook-auth';
import { FaceBookID } from '../../const/socialConst';
import "./GoogleFaceLoginCmp.css"
import { sendUserDataToServer, sendUserDataToStorage } from '../../api/loginApi';

import { Context } from '../../context/Context'

const FacebookButton = ({ onClick }) => {
    console.log("🚀 ~ file: FacebookLoginCmp.js ~ line 10 ~ onClick");
    return (
        < span
            className='bi-facebook iconButton'
            href="/"
            onClick={onClick}
            style={{ fontSize: 30 }}
        > </span>
    )
};

export const Fa1cebookLoginCmp = () => {
    const cont = useContext(Context)

    return (
        <FacebookAuth
            appId={FaceBookID}
            callback={(data) => {
                console.log("🚀 ~ file: FacebookLoginCmp.js ~ line 27 ~ data", data)
                sendUserDataToStorage(data);
                sendUserDataToServer(data);
                cont.sendUserDataToState(data);
            }}
            component={FacebookButton}
            onFailure={(err) => { console.log("Login filed", err) }}
        />
    )
}

