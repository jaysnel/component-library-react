import React from 'react'
import './index.css'

export default function Button5({ buttonClass, buttonId }) {
  return (
    <div className='container'>
        <button id={buttonId || 'button5'} className={buttonClass || 'btn'}>Button 5</button>
    </div>
  )
}
