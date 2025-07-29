import { useEffect, useState } from "react"
import Score from "./Score";

function Seleccion(){

    const [estadoJuego, setEstadoJuego] = useState("");
    const [resHuman, setResHuman] = useState(-1);
    const [resRobot, setResRobot] = useState("");
    const [score, setScore] = useState(0);
    const [seleccionado, setSelecionado] = useState(false);


    function seleccionar(res){
        setResHuman(res);
        setSelecionado(true);

        const respuestas = ["rock", "paper", "scisor"];

        //Random seleccion

        let numRandom = Math.ceil(Math.random()*3);
        
        if(numRandom == 1){
            setResRobot(respuestas[0]);

            if(res == 0){
                setEstadoJuego("EMPATE");
            }else if(res == 1){
                setEstadoJuego("GANASTE");
                setScore((s)=>s+1);
            }else{
                setEstadoJuego("PERDISTE");
            }

        }else if(numRandom == 2){
            setResRobot(respuestas[1]);

            if(res == 0){
                setEstadoJuego("PERDISTE");
            }else if(res == 1){
                setEstadoJuego("EMPATE");
            }else{
                setEstadoJuego("GANASTE");
                setScore((s)=>s+1);
            }

        }else{
            setResRobot(respuestas[2]);

            if(res == 0){
                setEstadoJuego("GANASTE");
                setScore((s)=>s+1);
            }else if(res == 1){
                setEstadoJuego("PERDISTE");
            }else{
                setEstadoJuego("EMPATE");
            }
        }

    }

    function seleccionDeEstilos(s){

        if(resHuman == 0 && resHuman == s){
            return 'rock-selected';
        }else if(resHuman == 1 && resHuman == s){
            return 'paper-selected';
        }else if(resHuman == 2 && resHuman == s){
            return 'scisor-selected';
        }else{
            return 'd-none';
        }
    }

    function seleccionDeEstilosRobot(){

        if(resRobot === 'rock'){
            return 'rock-button';
        }else if(resRobot === 'paper'){
            return 'paper-button';
        }else{
            return 'scisor-button';
        }
    }

    return(

        <>

            <Score score={score} />

            <div>
                <div className={`container-buttons ${seleccionado ? 'container-buttons-selected' : ''}`}>

                    <button className={`rock-button ${seleccionado ? seleccionDeEstilos(0):''}`} onClick={()=>{seleccionar(0)}}></button>
                    <button className={`paper-button ${seleccionado ? seleccionDeEstilos(1):''}`} onClick={()=>{seleccionar(1)}}></button>
                    <button className={`scisor-button ${seleccionado ? seleccionDeEstilos(2):''}`} onClick={()=>{seleccionar(2)}}></button>
                    
                    <div className={`${seleccionado ? 'p-again':'d-none'}`}>
                        <span>{estadoJuego}</span>
                        <button onClick={()=>{setSelecionado(false)}}>PLAY AGAIN</button>
                    </div>

                    <div className={`resRobot ${seleccionado?seleccionDeEstilosRobot():'d-none'}`}></div>
                </div>
        
            </div>
        </>
    )
}

export default Seleccion