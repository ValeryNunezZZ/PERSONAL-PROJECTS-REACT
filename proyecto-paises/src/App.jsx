import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Pais from './Pais'
import Desc from './Desc'
import data from './data.json'

function App() {

  const [mostrar, setMostrar] = useState(false);

  function mostrarDescripcion(){
    setMostrar(true);
  }

  return (
    <>
      <Nav/>

      <div className='buscador-container'>
        <input placeholder='Search for a country...'></input>
        <select>
          <option selected>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europa</option>
          <option>Oceania</option>
        </select>
      </div>

      {
        !mostrar?(
          <div className='container-paises'>
            {data.map(pais => <Pais bandera={pais.flags.png} nombre={pais.name} poblacion={pais.population} region={pais.region} capital={pais.capital} setMostrar={setMostrar}/>)}
          </div>
        ):(
          <Desc/>
        )
      }
    </>
  )
}

export default App
