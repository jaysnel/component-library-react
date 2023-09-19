import React from 'react'
import './index.css'

export default function Button4({ buttonClass, buttonId }) {
  return (
    <div className='container'>
        <button id={buttonId || 'button4'} className={buttonClass || 'button-default btn'}>4</button>
    </div>
  )
}
