import logo from './logo.svg';
import './App.css';
import QuizSetup from './components/setup';
import Quiz from './components/quiz'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quiz/>
      </header>
    </div>
  );
}

export default App;
