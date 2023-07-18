import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import QuizPart from "./components/QuizPart"
import Button  from "./components/Button.jsx"
import { decode } from 'he';

function App() {
  
  const [quizData, setQuizData] = useState([])
  const [start, setStart] = React.useState(false)
  const [displayComponent, setDisplayComponent] = useState(false)
  const [ refreshQuiz, setRefreshQuiz ] = useState(false)

  async function fetchQuestions() {
    const url = 'https://opentdb.com/api.php?amount=5&type=multiple';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Decode the entire question object and its properties
    const decodedData = data.results.map((question) => {
      const decodedQuestion = decode(question.question);
      const decodedCorrectAnswer = decode(question.correct_answer);
      const decodedIncorrectAnswers = question.incorrect_answers.map(answer => decode(answer));
      
      return {
        ...question,
        question: decodedQuestion,
        correct_answer: decodedCorrectAnswer,
        incorrect_answers: decodedIncorrectAnswers,
      };
    });

    return decodedData;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
}
 
  function toggle(){
    const newState = !start;
    setStart(newState);
    setDisplayComponent(true)
    setRefreshQuiz(true)
}


  useEffect(() => {
    async function fetchQuestionsData() {
      const data = await fetchQuestions();
      setQuizData(data)
      setRefreshQuiz(false)
    }
    if (refreshQuiz) {
      fetchQuestionsData();
    }
 
  }, [refreshQuiz]);




  function handlePlayAgain(){
    setRefreshQuiz(true)
    setDisplayComponent(true)
    
  }


  return (
    <div className="mainComp">

      {!displayComponent && <main>
        <div className="title">Quizzical 
          </div>
        <div className="description">Quizzical is a trivia game where you try to 5 questions at a time
          </div>
        <Button onChange={toggle}>Start</Button>
      
        </main>}
     
      {displayComponent && <div className='mainQuestionsPart'>
        <div className='questions'>
          {displayComponent && quizData.length > 0 && (
            quizData.map((question, index) => (
              <QuizPart
              key={index}
              question={question}
              setQuestions={setQuizData}
              refreshQuiz={refreshQuiz}
            />
         ))
      )}       
        </div>
      <Button onChange={handlePlayAgain}>Play Again</Button>

      </div>}
      
    </div>
 
  )
}

export default App
