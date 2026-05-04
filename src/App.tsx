import { useState } from 'react';
import Card from './Card.tsx';
import fixtures from './assets/fixtures.tsx';
import './App.css';

function Pub(){
  return (<>
    <strong>PUB :</strong><p> Achetez de la RAM sacrebleu !</p>
  </>)
}

export default function App() {
  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <ul className="userList">
        {fixtures.map(fixture =>
        <li><Card 
          user={fixture}
          >
            <Pub/>
        </Card></li>
      )}
      </ul>
    </>
  )
}
