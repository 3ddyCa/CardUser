import { useState } from 'react';
import Card from './Card.tsx';
import './App.css';
function Pub(){
  return (<>
    <strong>PUB :</strong><p> Achetez de la RAM sacrebleu !</p>
  </>)
}
function App() {


  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <Card user={{pseudo:"Gogo",email:"gogo@gmail.com", description:"Lorem ipsum"}}><Pub/></Card>
      <Card user={{pseudo:"Dudule",email:"Dudule@laposte.net", description:"Lorem ipsum"}}><Pub/></Card>
      <Card user={{pseudo:"Vince",email:"V.74@hotmail.fr", description:"Lorem ipsum"}}><Pub/></Card>

    </>
  )
}

export default App
