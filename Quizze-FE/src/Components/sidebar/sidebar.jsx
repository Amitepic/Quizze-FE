import "../../style/sidebar.css";

import React, {useState} from "react";
import CreateQuizModal from "../Create/CreateQuizModal";

export default function (props) {
    const { changeSelected, selected } = props;
    
    const [showModal, setShowModal] = useState(false);
  return (

    <>
     {showModal && <CreateQuizModal setShowModal={setShowModal} />}
    <div className="sidebar">
      <h2 className="title">QUIZZIE</h2>

      <div className="sidemenu">
        <div
          onClick={() => changeSelected(0)}
          className={`sidemenuitem ${selected === 0 && "selected"}`}
        >
          Dashboard
        </div>

        <div
          onClick={() => changeSelected(1)}
          className={`sidemenuitem ${selected === 1 && "selected"}`}
        >
          Analytics
        </div>

        <div onClick={() => setShowModal(true)} className={`sidemenuitem`}>
          create Quize
        </div>
      </div>

      <div className="footer">
        <hr />
        <h6 className="logout">LOGOUT</h6>
      </div>
    </div>
    </>
  );
}
