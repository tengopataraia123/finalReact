import {createContext, useState, useContext} from 'react';

const QuizContext = createContext()

const QuizContextProvider = ({children}) => {
    const [questions,setQuestions] = useState([])
    const [score,setScore] = useState(0)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [started,setStarted] = useState(false)
    const [finished,setFinished] = useState(false)

    const increaseScore = () => {
        setScore((prev)=> prev + 1)
    }

    const nextQuestion = () => {
        setCurrentQuestion((prev) => {
            if(prev === questions.length - 1){
                setStarted(false);
                setFinished(true);
                return 0;
            }else{
                return prev + 1;
            }
        })
    }

    return (
        <QuizContext.Provider value = {{questions,setQuestions,score,increaseScore,currentQuestion,nextQuestion,started,setStarted,finished,setFinished}}>{children}</QuizContext.Provider>
    )
}

export const useQuiz = () => useContext(QuizContext)

export default QuizContextProvider
