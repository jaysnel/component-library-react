import React, { useState } from 'react';
import './index.css';
import DefaultModalScreen from '../DefaultModalScreen';

export default function Modal1() {
  const [modalClass, setModalClass] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const handleButtonClick = (buttonId) => {
    setModalClass(buttonId);
    setModalActive(true);
  };

  const handleModalContainerClick = () => {
    setModalClass('out');
    // Delay removal of modal-active to allow for animation to play
    setTimeout(() => {
      setModalActive(false);
    }, 500); // Assuming 500ms is your animation duration
  };

  return (
    <>
      <div className="content">
        <DefaultModalScreen modalClass={modalClass} modalActive={modalActive} onClickFunction={handleModalContainerClick} />
        <h1>Modal Animations</h1>
        <div className="buttons">
          {/* Bind the button ID to the click handler */}
          <div id="seven" className="button" onClick={() => handleButtonClick('seven')}>Bond</div>
        </div>
      </div>
    </>
  );
}
