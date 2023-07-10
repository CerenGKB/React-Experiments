import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Button'
import { decode } from 'he';

export default function QuizPart({question,setQuestions}){

    const [options,setOptions] =useState()
    const [currentQuestion,setCurrentQuestion] = useState(0)

    const [selected,setSelected] = useState()
    const {error,setError} = useState(false)

    useEffect(()=>{
        

        setOptions(question && handleShuffle([
            decode(question.correct_answer),
            ...question.incorrect_answers.map((answer) => decode(answer)),
          ])
        )
    },[question])

    console.log(options)

    const handleShuffle = (selection) => {
        return selection.sort(() => Math.random() - 0.5)
    }

    return  (
        <div className='questions=part'>
           
            <div className="question-block">
                <div className="question">{question.question}  </div>
                <div className="answer-block">
                    {options && 
                    options.map(i=>(
                        <button id="q1">{i} </button>
                    ))}
               
                </div>
            </div>
            <hr/>

        </div>
    ) 
    
}