import React from 'react';
import { arrowdown, arrowup } from "../helper/Icons"
import { useState } from 'react';


const Question = ({ questions }) => {
    const [arrow, setArrow] = useState(true)
    return (

        <div className='questions' onClick={(setArrow(!arrow))}>
            {arrow ? (<><h2>{questions.question}</h2><button>{arrowdown} </button></>) : (<><h2>{questions.answer}</h2><button>{arrowup}</button></>)}

        </div>



    )
}

export default Question;
