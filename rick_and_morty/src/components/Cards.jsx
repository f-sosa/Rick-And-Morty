import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return( <div>
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
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
                  );
               })
            }
         </div>
   );
}