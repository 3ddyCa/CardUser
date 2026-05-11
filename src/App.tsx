import { useState } from 'react';
import Card from './Card.tsx';
import fixtures from './assets/fixtures.tsx';
import './App.css';

const noUsers = [];

function Pub(){
  return (<>
    <strong>PUB :</strong><p> Achetez de la RAM sacrebleu !</p>
  </>)
}

export default function App() {
  const isFull = (fixtures.length > 0);
  return (
    <>
      {(isFull?<h1>Liste des utilisateurs</h1>: 'Aucun utilisateur inscrit')}
      <ul className="userList">
        <li><p>il y a {fixtures.length} utilisateur(isFull? s : '')</p></li>
        if(isFull){
          fixtures.map(fixture =>
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
