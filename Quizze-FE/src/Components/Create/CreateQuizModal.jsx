import React, {useState} from 'react'
import '../../style/CreateQuiz.css'
import Congrats from './Congrats';
import QuizModalcom1 from './QuizModalcom1';
import QuizModalCom2 from './QuizModalCom2';



const QuestionModel = {
    question: '',
    type: '',
    options: [
        {option: '', isCorrect: false, url: ''},
        {option: '', isCorrect: false, url: ''},
    ]
}

const maxOptions = 4;
const maxQuestions = 5;
export default function (props)  {
    const {setShowModal} = props
    const [questions, setQuestions] = useState([]);
  return (
    <div className='modal'>
        {/* <QuizModalCom2 setShowModal={setShowModal} /> */}
        < Congrats  setShowModal={setShowModal}/>
    </div>
  )
}

