import React from 'react'

export default function DefaultModalScreen({ modalClass, modalActive, onClickFunction }) {

  return (
    <div id="modal-container" className={`${modalClass} ${modalActive ? 'modal-active' : ''}`} onClick={onClickFunction}>
        <div className="modal-background">
          <div className="modal">
            <h2>I'm a Modal</h2>
            <p>Just doing modal type things.</p>
          </div>
        </div>
      </div>
  )
}
