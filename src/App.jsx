import './App.css';
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/basicos/layout/Card'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

function App(props){
  return(
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Componente com filhos" color="#00FF7F">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="Desafio Aleatorio" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="Primeiro Componente" color="#E8B71A">
          <Primeiro>
          </Primeiro>
        </Card>

        <Card titulo="Situacao do Aluno" color="#588C73">
          <ComParametro 
            titulo="Situacao do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />
        </Card>

        <Card titulo="Primeiro">
          <Primeiro></Primeiro>
        </Card>
      </div>

    </div>
    );
}

export default App
