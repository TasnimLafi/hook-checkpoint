import React from 'react'


const Navbar = ({setsearch,setadd}) => {
  return (
    <div className='nav'>
        
      <h1>MovieApp</h1>
      <div>
        
       <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='search here'/>
      <button onClick={()=>setadd(true)}>AddMovie</button> 
      </div>
      
    </div>
  )
}

export default Navbar
