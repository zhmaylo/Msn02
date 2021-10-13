import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./ConditionCmp.css"

export const ConditionCmp = ({ condition }) => {

    const str = "*" + condition + "*";

    return (
        <span className="conditionTask">
            <ReactMarkdown children={str} className="d-flex align-item-justify" />
        </span>
    )
}

