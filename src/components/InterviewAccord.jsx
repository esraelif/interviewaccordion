import React from 'react';
import { questions } from '../helper/Data';
import Question from './Question';



const InterviewAccord = () => {
    return (
        <>
            {questions.map((questions, id) => {
                return (
                    <div className='question' key={questions.id}>
                        <Question questions={questions}>

                        </Question>

                    </div>
                );
            })}
        </>
    );
};

export default InterviewAccord;
