import React from 'react' 
import './QuestionAnswers.css'
import {Card} from '@material-ui/core'

import Question from './Question'

const questionData= [
    { id: 'q1a1', question:'IS COVID-19 WORSE THAN FLU?', answer:'COVID-19 has a higher rate of severe disease and mortality in nearly every age group, compared with influenza (flu).'},
    { id: 'q2a2', question:'HOW CAN WE TRUST VACCINES THAT HAVE BEEN DEVELOPED SO FAST?', answer:'So far, all approved COVID-19 vaccines have undergone large clinical trials with rigorous safety protocols, and without major safety concerns raised.'},
    { id: 'q3a3', question:'WHAT ARE THE RISKS OF RE-INFECTION?', answer:'Even if you have had a test that detects antibodies, reinfection is still possible, although less likely.'},
    { id: 'q4a4', question:'IS REGULARLY WASHING MY HANDS ENOUGH TO PROTECT ME?', answer:'Even though regularly washing your hands is very important, as with masks it is not enough on its own.'},
    
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