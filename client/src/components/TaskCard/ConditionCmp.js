import React from 'react';


export const ConditionCmp = ({ condition }) => {
    return (
        <div className="text-justify">
            <blockquote className="blockquote mb-0">
                <p> {condition} </p>
            </blockquote>
        </div>
    )
}