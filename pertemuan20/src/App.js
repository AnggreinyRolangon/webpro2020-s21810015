import './App.css';
import Card from './Components/Card';
import {Person} from './Utils/Person';

function App() {
  return (
    <>
      {Person.map((item) =>{
        return(
          <Card
            name={item.name}
            institution={item.institution}
            address={item.address}
            phone={item.phone}
          />
        );
      })}
    </>
  );
}

export default App;