import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const pessoa = {nome: "Augusto", sobrenome:"Cury"};

let nome = pessoa.nome; //declaração
nome = pessoa["sobrenome"]; //expressão
console.log(nome); //syso

ReactDOM.render(pessoa, document.getElementById('root'))
