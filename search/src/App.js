
import './App.css';
import Navbar from './componants/Navbar';
import List from './componants/List';
import React, { useState } from 'react'
import AddModal from './AddModal';

function App() {
  const [search, setsearch] = useState("")
  const [add, setadd] = useState(false)
  let movies=[
    {
        img:"https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
        name:"Prison Break",
        genre:"action",
        description:"His brother unjustly accused of murder, a civil engineer decides to help him escape from prison.",
    },
    {
        img:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
        name:"Breaking bad",
        genre:"criminal",
        description:"Walter White, 50, is a high school chemistry teacher in New Mexico. To raise money to support his family, Walter uses his knowledge of chemistry to manufacture and sell crystal meth.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLL-eiGT0PTjkSuUzUug6zwXyvfpexGxOEA&s",
        name:"Game of thrones",
        genre:"fantasy",
        description:"Nine noble families vie for control of the Iron Throne across the Seven Kingdoms of Westeros. Meanwhile, ancient, forgotten mythical creatures return to wreak havoc.",
    },
    {
        img:"https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        name:"Home Alone",
        genre:"Comedy",
        description:"The McCallister family has decided to spend Christmas in Paris. Only Kate and Peter McCallister realize on the plane that they are missing their youngest child, Kevin, aged nine. At first desperate, Kevin quickly takes matters into his own hands and organizes himself to live as best he can.",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldnzKpV-OjHLnWvEDB-SI_lVofRLFpCXAXA&s",
        name:"Vikings",
        genre:"war",
        description:"Scandinavia, at the end of the 8th century. Ragnar Lodbrok, a young Viking warrior, is eager for adventure and new conquests. Tired of pillaging the lands of the East, he decides to explore the West by sea.",
    },
  ]
  return (
    < div className="App">
      {add?<AddModal setadd={setadd} movies={movies} />:null}
      <Navbar setsearch={setsearch} setadd={setadd}/>
      <List search={search} movies={movies}/>
    </div>
  );
}

export default App;
