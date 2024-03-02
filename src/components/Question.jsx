import React from 'react';
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const Question = ({ question, answer, id }) => {

    return (

        <div>
            <h1>{question}</h1>
            <FaRegArrowAltCircleDown />
        </div>



    )
}

export default Question;
