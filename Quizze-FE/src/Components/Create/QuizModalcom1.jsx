import React, {useState} from 'react'

const options = [ "Q&A Type", "Poll Type" ];


export default function (props)  {
    const {setShowModal} = props
    const [selected, setSelected] = useState(2);

    const handleSelected = (index) => {
        setSelected(index);
    }
  return (
    <div className='page1'>
        <input type='text' placeholder='Quiz Name' />
        <div className='quiztype'>
            <p>Quiz Type</p>
            <div className='quiztypebtns'>
                <button onClick={()=> handleSelected(0)} className={`btnopt ${selected==0&&"selected"}`}>Q&A Type</button>
                <button onClick={()=> handleSelected(1)}className={`btnopt ${selected==1&&"selected"}`}>Poll Type</button>
            </div>
        </div>
        <div className='cancelconfirm'>
            <button onClick={()=> setShowModal(false)} className='cancelbtn'>Cancel</button>
            <button className='confirmbtn'>Continue</button>
        </div>
    </div>
  )
}
