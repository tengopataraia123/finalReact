import React, { useState } from 'react';
import QuizSetup from './setup';
import Question from './question';
import { useQuiz } from '../context/quiz';
import axios from 'axios';
import { useEffect } from 'react';

const Quiz = () => {
    const [difficulty,setDifficulty] = useState("easy")
    const [numQuestions,setNumQuestions] = useState(10)   
    const {questions,setQuestions,started,setStarted,score,finished,setFinished} = useQuiz()

    useEffect(() => {
        if(questions.length === 0){
            axios.get(`https://the-trivia-api.com/v2/questions?limit=${numQuestions}&difficulties=${difficulty}`)
            .then(response => {
                setQuestions(response.data)
            })
        }
    },[questions.length])

    const handleStart = (diff,num) => {
        setDifficulty(diff);
        setNumQuestions(num);
        setStarted(true);
        setFinished(false);
    }

    console.log(finished)


    if(!started){
        if(finished)
            return <div>                
                        <div>Score : {score}</div>
                        <QuizSetup onStart={handleStart}/>
                    </div>
        else
            return <QuizSetup onStart={handleStart}/>
    }else{
        return <Question difficulty={difficulty} numQuestions={numQuestions}/>
    }
}

export default Quiz;