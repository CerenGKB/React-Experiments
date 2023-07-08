import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import QuizPart from "./components/QuizPart"
import Button  from "./components/Button.jsx"


function App() {
  
  const [questions,setQuestions] = useState()  

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
      setQuestions(data);
    }

    fetchQuestionsData();
  }, []);


  
  const [displayComponent, setDisplayComponent] = useState(false)

  function handleState(newState){
    setDisplayComponent(newState)
  }

  return (
    <div>
    {!displayComponent && <main>
    
    <div className="title">Quizzical</div>
   <div className="description">Quizzical is a trivia game where you try to 5 questions at a time</div>
    <Button onStateChange={handleState}>Start</Button>
      
    
    </main>}
    <div className='questions'>
    {displayComponent && 
    <QuizPart
      questions={questions}
      setQuestions={setQuestions}
    />}
    </div>
    </div>
  )
}

export default App
