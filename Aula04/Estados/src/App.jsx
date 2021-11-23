import React from "react";
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  //let nome = "Michael";
  let stateNome = React.useState("Michael"); //useState retorna um array

  let nome = stateNome[0];
  let setNome = stateNome[1]; //na posição 1 do useState está uma função que troca o conteúdo da posição 0 pelo novo conteúdo

  function troca() {
    setNome("Michael");
    alert ("clicou");
  }

  const mexeTudo = () => { //função arrow para alterar mais de um state
    troca();
    incrementa();
  }

  return (
    <div className="App">
      <p>Estados</p>
      <p>{nome}</p>
      <button onClick={troca}>Troca o nome</button>
    </div>
  );
}

export default App;
