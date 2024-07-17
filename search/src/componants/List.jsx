import React from 'react'
import Card from './Card'

const List = ({search,movies}) => {
    const filteredMovies=movies.filter(el=>el.name.toLocaleUpperCase().includes(search.toLocaleUpperCase()))
  return (
    <div className='list'>
    {filteredMovies.length>0?filteredMovies.map(el=><Card el={el}/>):<h1>there is no movie with the name: "{search}"</h1>}
    </div>
  )
}

export default List
