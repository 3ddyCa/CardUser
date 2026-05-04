import { useState } from 'react'
import Card from './Card.tsx';
import './App.css'
function Pub(){
  return (<>
    <p>Achetez de la RAM sacrebleu !</p>
  </>)
}
function App() {


  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <Card pseudo={"Gogo"} email={"gogo@gmail.com"} description={"Lorem ipsum"}><Pub/></Card>

    </>
  )
}

export default App
