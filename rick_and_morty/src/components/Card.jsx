export default function Card(elements) {
   return (
      <div>
          <button onClick={elements.onClose}>X</button>
         <h2>{elements.name}</h2>
         <h2>{elements.status}</h2>
         <h2>{elements.species}</h2>
         <h2>{elements.gender}</h2>
         <h2>{elements.origin.name}</h2>
         <img src={elements.image} alt='' /> 
      </div>
   );
}