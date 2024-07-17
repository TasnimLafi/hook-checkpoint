import React, { useState } from 'react'

const AddModal = ({setadd,movies}) => {
    const [newmovie, setnewmovie] = useState({img:"",name:"",genre:"",description:""})
    const Change=(e)=>{
        const { name, value } = e.target;
        setnewmovie(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
  return (
    <div className='Modal'>
      <div className='box add'>
        <button className='exit' onClick={()=>setadd(false)}>X</button>
        <div className='input-container'>
        <input className='add-input' type="text" placeholder='movie name' value={newmovie.name} onChange={Change} />
        <input className='add-input' type="text" placeholder='image' value={newmovie.img} onChange={Change}/>
        <input className='add-input' type="text" placeholder='genre' value={newmovie.genre} onChange={Change}/>
        <input className='add-input' type="text" placeholder='description' value={newmovie.description} onChange={Change}/>
        </div>
        <button className='add-button' onClick={()=>setadd(false)} >Add</button>
      </div>
    </div>
  )
}

export default AddModal
