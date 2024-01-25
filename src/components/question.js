import React, { useState } from 'react';
import { useQuiz } from '../context/quiz';
import {useEffect} from 'react';
import axios from 'axios';

const Question = ({difficulty,numQuestions}) => {
    const {questions,setQuestions,increaseScore,currentQuestion,nextQuestion} = useQuiz()

    const question = questions[currentQuestion]

    const handleCorrect = () => {
        increaseScore();
        nextQuestion();
    }

    return (
        <div className="question">
            <div>
                {question.question.text}
            </div>
            <div onClick={handleCorrect}>{question.correctAnswer}</div>
            {question.incorrectAnswers.map((ans,index)=> {
                return <div onClick={nextQuestion}>{ans}</div>
            })}
        </div>
    )
}

export default Question