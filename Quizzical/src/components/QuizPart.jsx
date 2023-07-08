import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Button'

export default function QuizPart({questions,setQuestions}){

    const [options,setOptions] =useState()
    const [currentQuestion,setCurrentQuestion] = useState(0)

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
                <div className="question">Question  </div>
                <div className="answer-block">
                <div className="q1">Answer </div>
                <div className="q1">Answer</div>
                <div className="q1">Answer</div>
                <div className="q1">Answer</div>
                <div className="q1">Answer</div>
                </div>
            </div>
            <hr/>
            <div className="question-block">
            <div className="question">Question</div>
            </div>
            <hr/>
            <div className="question-block">
            <div className="question">Question</div>
            </div>
            <hr/>
            <div className="question-block">
            <div className="question">Question</div>
            </div>
            <hr/>
            <div className="question-block">
            <div className="question">Question</div>
            </div>
            <hr/>
            <Button>Check Answers</Button>
        </div>
    ) 
    
}