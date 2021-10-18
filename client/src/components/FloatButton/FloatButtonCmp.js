import React, { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Context } from './../../context/Context';
import { Link } from 'react-router-dom';

const loc = require("../../const/locale.json");

export const FloatButton = ({ setShowAddTask }) => {

    const cont = useContext(Context);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.AddTask[cont.lang]}
        </Tooltip>
    );

    return (
        <div >
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Link to="/addtaskpage" >
                    <i className="bi bi-plus-square" style={{ fontSize: 36 }} />
                </Link>
            </OverlayTrigger>
        </div>
    )
}