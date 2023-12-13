import React from 'react'
import '../Main/index.css'
import img from '../../../../../assets/working_with_computer.svg'
const Main = () => {
  return (
    <div className='container'>
    <div className='main'>
    <div className='main-content'>
     <p className='title'>More than just shorter links</p>
      <p className='paragraf'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
    <button>Get Started</button>
     </div>
     <div className='main-image'>
       <img src={img}></img>
     </div>
    </div>
    </div>
  )
}

export default Main