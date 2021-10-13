import React from 'react';
import ReactMarkdown from 'react-markdown';

export const HeaderCmp = ({ name, rating }) => {
    return (
        <div className="d-flex justify-content-between ">
            <ReactMarkdown children={`##### ${name}`} />
            <span className="d-flex flex-row justify-content-between align-items-center">
                <span className="px-1">
                    <ReactMarkdown children={`##### ${rating} `} />
                </span>
                <span className="h6">
                    <i class="bi bi-star"></i>
                </span>

            </span>
        </div>
    )
}