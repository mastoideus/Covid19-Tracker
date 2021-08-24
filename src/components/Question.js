import React, {useState} from 'react'
import './Question.css' 
import {Card} from '@material-ui/core'
import { FaCaretUp, FaCaretDown } from "react-icons/fa"

const Question =({answer, question })=>{
   const[readAnswer, setReadAnswer]=useState(false)

    const readAnswerHandler=()=>{
        setReadAnswer(prevState=>!prevState)
    }
  
  
    return (
      <Card className='question'>
         <div className='question__quest'>
           <h3 className='question__question'>{question}</h3>
            <button className='question__button' onClick={readAnswerHandler}>{readAnswer ? <FaCaretDown/>:<FaCaretUp/>}</button>
         </div>
         {readAnswer &&<p>{answer}</p>}
      </Card>
   )
}

export default Question 