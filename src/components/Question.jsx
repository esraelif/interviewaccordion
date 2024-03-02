import React from 'react';
import { arrowdown } from "../helper/Icons"


const Question = ({ questions }) => {

    return (

        <div className='questions'>
            <h2>{questions.question}</h2>
            {arrowdown}
        </div>



    )
}

export default Question;
