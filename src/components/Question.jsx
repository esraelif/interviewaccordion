import React, { useState } from 'react';
import { arrowdown, arrowup } from "../helper/Icons";

const Question = ({ questions }) => {
    const [arrow, setArrow] = useState(true);

    const toggleArrow = () => {
        setArrow(!arrow);
    };

    return (
        <div className='questions' onClick={toggleArrow}>
            {arrow ? (
                <div className='card'>

                    <h2>{questions.id}.{questions.question}</h2>
                    <div className='button'>{arrowdown}</div>
                </div>
            ) : (
                <div className='card'>
                    <h2>{questions.answer}</h2>
                    <div className='button'>{arrowup}</div>
                </div>
            )}
        </div>
    );
};

export default Question;
