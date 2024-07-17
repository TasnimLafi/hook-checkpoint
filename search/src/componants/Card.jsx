import React, { useState } from 'react'
import Modal from './Modal'

const Card = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
        {show?<Modal el={el} setshow={setshow}/>:null }
      <img onClick={()=>setshow(true)} src={el.img} alt="" />
    </div>
  )
}

export default Card
