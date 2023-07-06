import React from 'react'
import Button from './Button'

export default function QuizPart(props){

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