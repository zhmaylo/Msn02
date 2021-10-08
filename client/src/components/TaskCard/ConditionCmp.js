import React from 'react';
import "./ConditionCmp.css";
import Accordion from 'react-bootstrap/Accordion';

export const ConditionCmp = () => {
    return (
        <div className="condition">
            <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </div>
    )
}