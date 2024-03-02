import React from 'react';
import { questions } from '../helper/Data';
import Question from './Question';

// import { FaEye } from 'react-icons/fa'; // FaEye ikonunu ekleyelim

const InterviewAccord = () => {
    return (
        <>
            {questions.map((interview, index) => {
                return (
                    <div key={index}>
                        <Question {...questions}>

                        </Question>

                    </div>
                );
            })}
        </>
    );
};

export default InterviewAccord;
