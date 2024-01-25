import React, { useState } from 'react';

const QuizSetup = ({ onStart }) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [numQuestions, setNumQuestions] = useState(5);

  const handleStart = () => { 
    onStart(difficulty, numQuestions);
  };

  return (
    <div>
      <label>
        Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <br />
      <label>
        Number of Questions:
        <select value={difficulty} onChange={(e) => setNumQuestions(parseInt(e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <br />
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default QuizSetup;
