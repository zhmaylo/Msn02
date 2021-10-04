import React, { useContext } from "react";
import "./LogoutCmp.css"
import Button from 'react-bootstrap/Button';
import { Context } from '../../context/Context';
import { removeUserDataFromStore } from "../../api/login/userStoreApi";

export const LogoutCmp = ({ onChange }) => {
    const cont = useContext(Context)
    console.log('🚀 ~ file: LogoutCmp.js ~ line 14 ~ LogoutCmp ~ cont.userData.name', cont.userData.name);

    return (
        <div>

            <span style={{ marginRight: 10 }} >{cont.userData.name} </span>
            <Button variant={"outline-secondary"}
                // onClick={() => { onChange() }}
                onClick={() => {
                    removeUserDataFromStore()
                    cont.sendUserDataToState({ id: null, name: null });
                }}

            >
                <i className="bi bi-box-arrow-right icon-exit" ></i>
            </Button>


        </div>
    )
}
