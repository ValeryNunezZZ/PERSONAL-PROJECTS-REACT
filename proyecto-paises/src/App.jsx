import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Nav'
import Pais from './Pais'
import PaisSelected from './PaisSelected'
import data from './data.json'

import search from './img/search.png'
import arrowDown from './img/arrowDown.png'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [mostrar, setMostrar] = useState(false);
  const [infoPaisSelected, setInfoPaisSelected] = useState(null);
  const [region, setRegion] = useState('');
  const [filtro, setFiltro] = useState('');

  function handleSeleccionarPais(nomPais){
    setMostrar(true)

    //buscar al pais
    const pais = data.find(pais=>pais.name === nomPais)
    setInfoPaisSelected(pais);
  }

  function handleDeseleccionarPais(){
    setMostrar(false)
  }

  const paisesFiltrados = data.filter((pais)=>{
    const paisRegion = pais.name.toLowerCase().startsWith(filtro.toLowerCase())
    const paisNombre = region === '' || pais.region.toLowerCase() === region.toLowerCase();

    return paisRegion && paisNombre
  })

  return (
    <>
      <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>

      {
        (mostrar && infoPaisSelected)?(
          <PaisSelected  infoPaisSelected={infoPaisSelected} handleDeseleccionarPais={handleDeseleccionarPais} darkMode={darkMode}/>
        ):(
          <>
          <div className={`buscador-container ${darkMode?'dark':''}`}>
            <div className='search-container'>
              <span>
                <img src={search}></img>
              </span>
              <input onChange={(e)=>{setFiltro(e.target.value)}} placeholder='Search for a country...'></input>
            </div>

            <div className='filtro-container'>
              <select value={region} onChange={(e)=>{setRegion(e.target.value)}}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
              </select>
              <span>
                  <img src={arrowDown}></img>
              </span>
            </div>
          </div>

          <div className={`container-paises ${darkMode?'dark':''}`}>
            {
              (paisesFiltrados.length === 0)?(
                <p className='nm'>There are no matches</p>
              ):(
                paisesFiltrados.map((pais, index)=><Pais key={index} bandera={pais.flags.png} nombre={pais.name} poblacion={pais.population} region={pais.region} capital={pais.capital} handleSeleccionarPais={handleSeleccionarPais} darkMode={darkMode}/>)
              )
            }
          </div>
        </>
        )
      }
    </>
  )
}

export default App
