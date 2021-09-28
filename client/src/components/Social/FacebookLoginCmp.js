import React from "react";
import FacebookAuth from 'react-facebook-auth';
import { FaceBookID } from '../../const/socialConst';
import "./GoogleFaceLoginCmp.css"
import { login } from '../../api/loginApi';

// import { Context } from '../../context/Context'


const FacebookButton = ({ onClick, styles }) => (
    < span
        className='bi-facebook iconButton'
        href="/"
        onClick={onClick}
    > </span>
);

export const FacebookLoginCmp = () => {
    // const cont = useContext(Context)
    return (
        <FacebookAuth
            appId={FaceBookID}
            callback={(data) => { login(data) }}
            component={FacebookButton}
            onFailure={(err) => { console.log("Login filed", err) }}
        />
    )
}

