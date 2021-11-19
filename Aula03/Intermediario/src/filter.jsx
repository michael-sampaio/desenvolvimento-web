import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let nomes = ["Erick", "Augusto", "Rodrigo", "Vitor", "Hugo", "osiris", "Matheus", "Brayan", "Caio", "Helton", "Vitor", "Isabela",
 "Deborah", "Tatiana", "Patricia", "Mariana", "Gustavo", "Weridiana", "Camilla", "Renato", "Leonardo", "joaoLuiz", "Michael",
 "Caroline", "Jana", "Pedor", "JoãoPedro", "Paula"]

 function fn(nomes){
    let letra = nomes.substr(0, 1);
    return letra == "M";
    }
    nomes.filter(fn)
