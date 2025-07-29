import { useState } from "react"
import Score from "./Score";

function Seleccion(){

    const [estadoJuego, setEstadoJuego] = useState("");
    const [resRobot, setResRobot] = useState("");
    const [score, setScore] = useState(0);
    const [seleccionado, setSelecionado] = useState(false);

    function seleccionar(res){
        
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

    return(

        <>

            <Score score={score} />

            <div>
                <div className={`container-buttons ${seleccionado ? 'container-buttons-selected' : ''}`}>
                    <button className={`${seleccionado ? 'hand-selected':''}`} onClick={()=>{seleccionar(0)}}></button>
                    <button className={`${seleccionado ? 'd-none':''}`} onClick={()=>{seleccionar(1)}}></button>
                    <button className={`${seleccionado ? 'd-none':''}`} onClick={()=>{seleccionar(2)}}></button>
                    <div className={`${seleccionado ? 'p-again':'d-none'}`}>
                        <span>{estadoJuego}</span>
                        <button onClick={()=>{setSelecionado(false)}}>PLAY AGAIN</button>
                    </div>
                    <div className={`${seleccionado?'resRobot':'d-none'}`}>res</div>
                </div>
        
            </div>
        </>
    )
}

export default Seleccion