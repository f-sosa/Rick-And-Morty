import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
const Detail = () => {
    const { id } = useParams();
    const [characters, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div> 
        <ul>
        <h1>{characters.name}-</h1>
        <li>Status | {characters.status}</li>
        <li>Gender | {characters.gender}</li>
        <li>Specie | {characters.species}</li>
        <li>Origin | {characters.origin ? characters.origin.name : "Desconocido"}</li>
        </ul>
        <img src={characters.image} alt="Una persona disfrutando de la playa en un día soleado"/> 
        </div>
    )
}

export default Detail;