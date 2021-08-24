import React from 'react' 
import './QuestionAnswers.css'
import {Card} from '@material-ui/core'

import Question from './Question'

const questionData= [
    { id: 'q1a1', question:'Is the Covid-19 Vaccine Astra-Zeneca aproved?', answer:'The Covid-19 Vaccine Astra-Zeneca is well tested and not more dangerous then Vaccines from other medicine producer.'},
    { id: 'q2a2', question:'Is the Covid-19 Vaccine Astra-Zeneca aproved?', answer:'The Covid-19 Vaccine Astra-Zeneca is well tested and not more dangerous then Vaccines from other medicine producer.'},
    { id: 'q3a3', question:'Is the Covid-19 Vaccine Astra-Zeneca aproved?', answer:'The Covid-19 Vaccine Astra-Zeneca is well tested and not more dangerous then Vaccines from other medicine producer.'},
    { id: 'q4a4', question:'Is the Covid-19 Vaccine Astra-Zeneca aproved?', answer:'The Covid-19 Vaccine Astra-Zeneca is well tested and not more dangerous then Vaccines from other medicine producer.'},
    
]




const QuestionAnswers=()=>{
   
    
    const questionList=questionData.map(question=>{
        return <Question
           question={question.question}
           answer={question.answer}
           id={question.id}
         />
    })
    
    return (
        <div className='container'>
          <Card className='question__title'>Questions & Answers</Card>
         
            {questionList}
       
         
        </div>
    )
}


export default QuestionAnswers 