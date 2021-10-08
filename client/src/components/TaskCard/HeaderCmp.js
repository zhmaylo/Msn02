import React from 'react';

export const HeaderCmp = ({name, rating }) => {
    return (
        <div className="d-flex justify-content-between">
            <span>
                {name}
            </span>
            <span>
                {rating} <i class="bi bi-star"></i>
            </span>
        </div>

    )
}