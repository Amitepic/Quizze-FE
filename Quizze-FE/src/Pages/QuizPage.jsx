
import "../style/quiz.css";

import Congratulations from "../Components/Quiz/congratulation"
import Questions from "../Components/Quiz/Question"

export default function () {
  return (
    <div className='quizcontainer'>
        {/* <Congratulations /> */}
        <Questions />
    </div>
  )
}