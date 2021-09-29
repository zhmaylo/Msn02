import React, { useContext } from "react";
import "./LogoutCmp.css"

import Button from 'react-bootstrap/Button';
import { logout } from './../../api/loginApi';
import { Context } from '../../context/Context';

export const LogoutCmp = ({ onChange }) => {
    const cont = useContext(Context)
    return (
        <>
    
                <span style={{ marginRight: 10 }} >{cont.userInfo.name} </span>
                <Button variant={"outline-secondary"}
                    onClick={() => { onChange(logout()) }}
                // onClick={ (logout()) }
                >
                    <i className="bi bi-box-arrow-right icon-exit" ></i>
                </Button>
         
        </>
    )
}
