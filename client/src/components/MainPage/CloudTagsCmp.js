import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud'
import { useGetTagsRequest } from '../../api/cloudTagsApi';

import "./CloudTagsCmp.css"


export const CloudTagsCmp = () => {

    const { getTagsRequest } = useGetTagsRequest();
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTagsRequest().then((tagsFromServer) => {
            setTags(tagsFromServer);
        });
    }, [getTagsRequest])

    return (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={tags}
            disableRandomColor={true}
            onClick={tag => {
                console.log("🚀 ~ file: CloudTagsCmp.js ~ line 26 ~ tag", tag);
                alert(`'${tag.value}' was selected!`)}}
            style={{ textAlign: 'center' }}
            className="simple-cloud"
        />
    )
}

