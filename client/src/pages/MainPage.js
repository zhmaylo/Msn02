import React from "react";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export const MainPage = () => {
    return (
        <ButtonToolbar aria-label="Toolbar with button groups" className="d-flex pt-3 justify-content-center">
            <ButtonGroup className="me-2" aria-label="First group" >
                <Button variant="outline-secondary" >По дате</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="outline-secondary">По рейтингу</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}