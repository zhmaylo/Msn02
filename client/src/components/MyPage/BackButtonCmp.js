import React from 'react';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

const loc = require("../../const/locale.json");

export const BackButtonCmp = () => {
    const cont = useContext(Context)
    return (
        <>
            <Button variant="link"
                href={'/mypage'}
            >
                <i class="bi bi-arrow-left"></i> <span>{loc.Back[cont.lang]} </span>
            </Button>
        </>
    )
}

