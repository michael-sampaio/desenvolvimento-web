import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function manipulator(){
  alert("clicou");
}

let botao = <button onMouseEnter={manipulator}>Clique aqui</button>

ReactDOM.render(
  botao, document.getElementById('root')
)
