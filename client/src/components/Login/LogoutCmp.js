import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { removeUserDataFromStore } from "../../api/login/userStoreApi";
import { Context } from '../../context/Context';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const loc = require("../../const/locale.json");

export const LogoutCmp = ({ onChange }) => {
    const cont = useContext(Context)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.Exit[cont.lang]}
        </Tooltip>
    );

    return (
        <div>
            <span style={{ marginRight: 10, fontSize: 12 }} >{cont.userData.name} </span>
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
            <Button variant={"outline-secondary"}
                onClick={() => {
                    removeUserDataFromStore()
                    cont.sendUserDataToState({ id: null, name: null });
                }}
            >
                <i className="bi bi-box-arrow-right icon-exit" ></i>
            </Button>
            </OverlayTrigger>
        </div>
    )
}
