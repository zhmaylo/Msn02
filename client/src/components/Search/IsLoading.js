import React, { useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Context } from './../../context/Context';

const loc = require("../../const/locale.json");

export const IsLoading = ({ visible, getSearch }) => {
    const cont = useContext(Context)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {loc.SearchBut[cont.lang]}
        </Tooltip>
    );

    if (visible) {
        return (<Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
        />)
    }
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <span className='bi bi-search'
                onClick={() => {
                    getSearch();
                }}
            />
        </OverlayTrigger>
    )
}


