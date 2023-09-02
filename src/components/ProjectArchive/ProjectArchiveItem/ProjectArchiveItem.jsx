import React, { useEffect, useState } from 'react'
import "./ProjectArchiveItem.scss"

export default function ProjectArchiveItem({ data }) {
    const [words, setWords] = useState([]);

    useEffect(() => {
        if (data.builtWith && data.builtWith.trim() !== "") {
            const words = data.builtWith.split(' ');
            setWords(words);
        } else {
            setWords([]);
        }
    }, [data.builtWith]);

    return (
        <div className='projectArchiveItemSection'>
            <div className="projectArchiveItemContent">
                <div className="projectArchiveItemContainer">
                    <span className='year'>
                        {data.year}
                    </span>
                    <span>
                        {data.title}
                    </span>
                    <span className='builtWithContainer'>
                        {words.map((word, index) => (
                            <span key={index} className='builtWith'>
                                {word}
                                {index !== words.length - 1 && ' '}
                            </span>
                        ))}
                    </span>
                    <span className='navLink'>
                        {data.url}
                    </span>
                </div>
            </div>
        </div>
    )
}
