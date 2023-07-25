import { useState } from 'react';
import axios from "axios";
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';



function App() {

   const [characters, setCharacter] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onCLose = (id) =>  {

      setCharacter(
         characters.filter(char => {
            return char.id != Number(id);
         })
      )

   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         { <Cards characters={characters} onCLose={onCLose} />}
      </div>
   );
}

export default App;