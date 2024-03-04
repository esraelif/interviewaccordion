import React, { useState } from 'react';
import { arrowdown, Arrowup } from "../helper/Icons";

const Question = ({ questions }) => {
    const [arrow, setArrow] = useState(true);

    const toggleArrow = () => {
        setArrow(!arrow);
    };

    return (
        <div className='questions' onClick={toggleArrow}>
            {arrow ? (
                <div className='cardfront'>

                    <h2>{questions.id}.{questions.question}</h2>
                    <button className='button'>{arrowdown}</button>
                </div>
            ) : (
                <div className='cardback'>
                    <div className="answer">
                        <h2>{questions.id}.{questions.question}</h2>
                        <button className='button'><Arrowup /></button>
                    </div>

                    <div className="ans">
                        <h3>{questions.answer}</h3>
                    </div>


                </div>
            )}
        </div>
    );
};

export default Question;
