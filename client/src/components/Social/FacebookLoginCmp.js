import React, { useContext } from "react";
import FacebookAuth from 'react-facebook-auth';
import { FaceBookID } from '../../const/socialConst';
import "./GoogleFaceLoginCmp.css"
import { Context } from '../../context/Context'
import { sendUserDataToStorage } from "../../api/login/userStoreApi";
import { sendUserDataToServer } from "../../api/login/userServerApi";

const FacebookButton = ({ onClick }) => {
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

    const facebookOk = (data) => {
        sendUserDataToStorage(data);
        sendUserDataToServer(data);
        cont.sendUserDataToState(data);
    }

    return (
        <FacebookAuth
            appId={FaceBookID}
            callback={(data) => { facebookOk(data) }}
            component={FacebookButton}
            onFailure={(err) => { console.log("Login filed", err) }}
        />
    )
}

