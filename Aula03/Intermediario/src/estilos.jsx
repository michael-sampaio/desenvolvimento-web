import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let estilo = {
  margin: "20px",
  background: "tomato",
  color: "#fff",
}

let estilo2 = {
  margin: "20px",
  background: "green",
  color: "#fff",
}

let botao = <button style={estilo}>Clique aqui</button>
let botao2 = <button style={estilo2}>Clique aqui</button>

const menu = [botao, botao2];

ReactDOM.render(
  menu, document.getElementById('root')
)
