import React from "react";
import "../Cards/cards.css";
import {Link} from "react-router-dom";
export default function Card(elements) {
   return (
      <div  className='cards'>
         <figure>
         <img src={elements.image} alt="Una persona disfrutando de la playa en un día soleado" height={"250px"}/>         
         <div className="content">
         <button onClick={() => elements.onClose(elements.id)}>X</button>    
         <Link to={`/detail/${elements.id}`}>  <h2>{elements.name}</h2></Link>
         <h2>{elements.species}-{elements.gender}</h2>
         <h2>{elements.origin}</h2> 
         </div>
         </figure>  
         
      </div>
   );
}