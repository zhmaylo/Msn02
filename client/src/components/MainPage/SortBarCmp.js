import React, { useContext } from "react";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Context } from './../../context/Context';
import { rating } from "../../const/mainConst";
import { createAt } from './../../const/mainConst';
const loc = require("../../const/locale.json");

export const SortBarCmp = ({ setField }) => {
    const cont = useContext(Context)
    return (
        <div className="d-flex justify-content-center pt-3">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton variant="outline-secondary" id="tbg-radio-1" value={1}
                    onClick={() => {
                        setField(createAt)
                    }}
                >
                    {loc.ByDate[cont.lang]}
                </ToggleButton>
                <ToggleButton variant="outline-secondary" id="tbg-radio-2" value={2}
                    onClick={() => {
                        setField(rating)
                    }}
                >
                    {loc.ByRating[cont.lang]}
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

