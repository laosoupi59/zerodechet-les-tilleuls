import React from 'react'

const TutoSlide = ({ title, txt, backgnd }) =>
  <div className='tuto__slide'>
    <div className='tuto__wording'>
      <div className='h--slide'>{title}</div>
      <p className='tuto__txt'>{txt}</p>
    </div>
    <div className={`tuto__backgnd tuto__backgnd--${backgnd}`}></div>
  </div>

export default TutoSlide