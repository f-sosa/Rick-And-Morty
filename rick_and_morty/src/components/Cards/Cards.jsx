import Card from "../Card/Card.jsx";
import "./cards.css";
export default function Cards(props) {
   const {characters} = props;
   const {onCLose} = props;
   return( <div className='cards'>
            {
               characters.map(charac =>{
                  return(
                  <Card
                  key={charac.id}
                  id={charac.id}
                  name={charac.name}
                  status={charac.status}
                  species={charac.species}
                  gender={charac.gender}
                  origin={charac.origin.name}
                  image={charac.image}
                  onClose={onCLose}
                  />
                  );
               })
            }
         </div>
   );
}