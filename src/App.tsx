import { useState } from 'react';
import Card from './Card.tsx';
import fixtures from './assets/fixtures.tsx';
import {Pub} from './Pub.tsx';
import './App.css';

const noUsers = [];


export default function App() {
  const [carac, setCarac] = useState('');
  const isFull = (fixtures.length > 0);
  const USER_LIST = fixtures.filter((user)=>{
    switch(true){
      case '' == carac:
        return true;
        break;
      case user.pseudo == carac:
        return true;
        break;
      case user.email == carac:
        return true;
        break;
      case user.description == carac:
        return true;
        break;
      case user.sexe == carac:
        return true;
        break;
    }
  })
  return (
    <>
      {isFull?<h1>Liste des utilisateurs</h1>: 'Aucun utilisateur inscrit'}
      <ul className="userList">
        <li><p>il y a {fixtures.length} utilisateur{isFull? 's' : ''}</p></li>
        <li><input type="text" onChange={(event)=>{setCarac(event.target.value)}} placeholder='Recherche' defaultChecked></input></li>
        {isFull &&
          USER_LIST.map(fixture =>
            <li><Card key={fixtures.indexOf(fixture)}
              user={fixture}
              >
                <Pub/>
            </Card></li>
          )

        }
        
      </ul>
    </>
  )
}
