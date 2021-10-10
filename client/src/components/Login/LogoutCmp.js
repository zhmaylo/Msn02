import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { Context } from '../../context/Context';
import { removeUserDataFromStore } from "../../api/login/userStoreApi";

export const LogoutCmp = ({ onChange }) => {
    const cont = useContext(Context)
    return (
        <div>
            <span style={{ marginRight: 10, fontSize: 12 }} >{cont.userData.name} </span>
            <Button variant={"outline-secondary"}
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
