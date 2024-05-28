import Image from '../../assets/cong.png'


const isPoll = true;

export default function () {
  return (
    <div className="quizcompleted">
      {isPoll ? (
        <h1 className="thankyou">Thank you for participating in the Poll</h1>
      ) : (
        <>
          <h1>Congrats Quiz is completed</h1>
          <img src={Image} alt="cong" />
          <h1>
            Your score is <span className="score">03/04</span>
          </h1>
        </>
      )}
    </div>
  )
}