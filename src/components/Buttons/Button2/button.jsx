import React from 'react'
import './index.css'

export default function Button2({ buttonClass, buttonId }) {
  return (
    <div className='container'>
      <button id={buttonId || 'button2'} className={buttonClass || 'button-default'}>2</button>
    </div>
  )
}
