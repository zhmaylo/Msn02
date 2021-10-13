import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./ConditionCmp.css"

export const ConditionCmp = ({ condition }) => {

    return (
        <span className="conditionTask">
            <ReactMarkdown children={condition} className="d-flex align-item-justify" />
        </span>
    )
}

