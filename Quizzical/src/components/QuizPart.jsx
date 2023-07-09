import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Button'

export default function QuizPart({questions,setQuestions}){

    const [options,setOptions] =useState()
    const [currentQuestion,setCurrentQuestion] = useState(0)

    const [selected,setSelected] = useState()
    const {error,setError} = useState(false)

    useEffect(()=>{
        console.log(questions)

        setOptions(questions && handleShuffle(
            [questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers
        ])
        )
    },[questions])

    console.log(options)

    const handleShuffle = (selection) => {
        return selection.sort(() => Math.random() - 0.5)
    }

    return  (
        <div className='questions=part'>
           
            <div className="question-block">
                <div className="question">{questions[currentQuestion].question}  </div>
                <div className="answer-block">
                    {options && 
                    options.map(i=>(
                        <button className="q1">{i} </button>
                    ))}
               
                </div>
            </div>
            <hr/>
           
            <Button>Check Answers</Button>
        </div>
    ) 
    
}