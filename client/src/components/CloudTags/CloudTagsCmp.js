import React from 'react';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { TagCloud } from 'react-tagcloud'
import "./CloudTagsCmp.css"

const loc = require("../../const/locale.json");

export const CloudTagsCmp = ({ userList }) => {
    const cont = useContext(Context)

    const data = [
        { value: 'JavaScript', count: 38 },
        { value: 'React', count: 30 },
        { value: 'Nodejs', count: 28 },
        { value: 'Express.js', count: 25 },
        { value: 'HTML5', count: 33 },
        { value: 'MongoDB', count: 18 },
        { value: 'CSS3', count: 20 },
    ]


    return (
        <>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
                disableRandomColor={true}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
                className="simple-cloud"
            />
        </>

    )
}

