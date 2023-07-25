import './css/Card.css';
export default function Card(elements) {
   return (
      <div className='container'>
         <img src={elements.image} alt="Una persona disfrutando de la playa en un día soleado" className='image-container container' /> 
         <button onClick={() => elements.onClose(elements.id)}>X</button>
         <h2>{elements.name}-{elements.status}</h2>
         <h2>{elements.species}-{elements.gender}</h2>
         <h2>{elements.origin}</h2>
         
      </div>
   );
}