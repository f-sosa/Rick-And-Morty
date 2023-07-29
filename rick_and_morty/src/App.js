import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Login from "./components/Login/Login.jsx"
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';
function App() {
   const [characters, setCharacter] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onCLose = (id) => {
      setCharacter(
         characters.filter(char => {
            return char.id != Number(id);
         })
      )
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   return (
      <body className='body'>
      <div className='app'>
         {location.pathname === '/' ? <Login onLogin={login} /> : <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onCLose={onCLose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
      </body>
   );
}

export default App;