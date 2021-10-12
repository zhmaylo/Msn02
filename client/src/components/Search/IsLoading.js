import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export const IsLoading = ({ visible, getSearch }) => {
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
        <span className='bi bi-search'
            onClick={() => {
                getSearch();
            }}
        />
    )
}


