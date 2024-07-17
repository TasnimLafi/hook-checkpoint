import React from 'react'

const Modal = ({el,setshow}) => {
  return (
    <div className='Modal'>
      <div className="box">
        <button onClick={()=>setshow(false)}>X</button>
        <h1>{el.name}</h1>
        <h2>{el.genre}</h2>
        <h2>{el.description}</h2>
      </div>
    </div>
  )
}

export default Modal
