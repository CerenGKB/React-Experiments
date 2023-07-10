import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import QuizPart from "./components/QuizPart"
import Button  from "./components/Button.jsx"


function App() {
  
  const [quizData, setQuizData] = useState([])


  async function fetchQuestions() {
    const url = 'https://opentdb.com/api.php?amount=5&type=multiple';
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching questions:', error);
      return [];
  
    }
  }
  
  useEffect(() => {
    async function fetchQuestionsData() {
      const data = await fetchQuestions();
      setQuizData(data)
    }

    fetchQuestionsData();
  }, []);


  
  const [displayComponent, setDisplayComponent] = useState(false)

  function handleState(newState){
    setDisplayComponent(newState)
  }

  return (
    <div className="mainComp">
    {!displayComponent && <main>
    
    <div className="title">Quizzical</div>
   <div className="description">Quizzical is a trivia game where you try to 5 questions at a time</div>
    <Button onStateChange={handleState}>Start</Button>
      
    
    </main>}
    <div className='questions'>
    {displayComponent && quizData.length > 0 && (
          quizData.map((question, index) => (
            <QuizPart
              key={index}
              question={question}
              setQuizData={setQuizData}
            />
          ))
        )}
             <hr/>
    </div>
    </div>
  )
}

export default App
