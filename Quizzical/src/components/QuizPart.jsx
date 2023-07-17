import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Button'
import { decode } from 'he'

export default function QuizPart({question,setQuestions ,  refreshQuiz}){

    const [options,setOptions] =useState()

    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    
    useEffect(()=>{
        setOptions(question && handleShuffle([
            decode(question.correct_answer),
            ...question.incorrect_answers.map((answer) => decode(answer)),
          ])
        )
    },[question])


    useEffect(() => {
        setSelectedAnswer('');
        setIsCorrect(false);
      }, [refreshQuiz]);
    

    const handleShuffle = (selection) => {
        return selection.sort(() => Math.random() - 0.5)
    }

    const handleAnswerClick = (answer) => {
        if (answer === decode(question.correct_answer)) {
          setIsCorrect(true);
        } else {
          setIsCorrect(false);

        }
        setSelectedAnswer(answer);
      };

    return  (
        <div className='questions=part'>
            <div className="question-block">
                <div className="question">{question.question}  </div>
                <div className="answer-block">
                {options &&
                   options.map((answer, index) => (
                    <button
                    id="q1"
                    key={index}
                    className={
                      selectedAnswer === answer
                        ? isCorrect
                          ? 'green'
                          : 'red'
                        : answer === decode(question.correct_answer) && selectedAnswer !== ''
                        ? 'green'
                        : ''
                    }
                    disabled={selectedAnswer !== ''}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </button>
            ))}
               
                </div>
            </div>
            <hr/>

        </div>
    ) 
    
}