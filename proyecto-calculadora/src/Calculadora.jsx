import { useReducer, useState } from "react";
import Button from "./Button";


function reducer(state, action){
    switch(action.type){
        case '+':
            console.log('holis')
            break;

        default:
            break;
    }
}

function Calculadora(){

    const [number, setNumber] = useState('0');
    const [theme, setTheme] = useState(1);

    
    const handleSetNumber = (num) =>{
        const last = isNaN(number[number.length-1]);

        if(number[0] == 'I'){
            setNumber('0');
        }else if(number[0] == '0' && num == '0'){
            setNumber('0');
        }else if(number[0] == '0' && (num == '+' || num == 'x' || num == '/' || num == '-' || num == '.') && number.length == 1){
            setNumber('0');
        }else if(number[0] == '0' && num != '0'){
            setNumber(num);
        }else if(last && (num == '+' || num == 'x' || num == '/' || num == '-' || num == '.')){
            setNumber(number);
        }else{
            setNumber(prev => prev + num);
        }
    }

    const handleDelete = () => {
        setNumber(number.substring(0, number.length-1))

        if(number.length == 1 || number[0] == 'I'){
            setNumber('0')
        }
    }

    const handleReset = () => {
        setNumber('0')
    }

    const handleIgual = () => {

        if(isNaN(parseInt(number[number.length-1]))){
            return;
        }

        let cola = "";

        let numUno = null;

        let auxNum = "";

        let por = true;
        let divide = true;

        let res;

        for(let i=0 ; i<number.length ; i++){
            if(!isNaN(parseFloat(number[i])) || number[i] == '.'){
                auxNum += number[i];
            }else if(number[i] == '+' || number[i] == '-'){

                if(numUno !== null){
                    if(por){
                        res = numUno * parseFloat(auxNum);
                    }else{
                        res = numUno / parseFloat(auxNum);
                    }
                    
                    cola += res + number[i];
                    auxNum = "";
                    numUno = null
                }else{
                    cola += auxNum;
                    cola += number[i];
                    auxNum = "";
                }

                por = true;
                divide = true;

            }else if(number[i] == '/'){

                if(numUno !== null){
                    if(por){
                        res = numUno * parseFloat(auxNum);
                    }else{
                        res = numUno / parseFloat(auxNum);
                    }

                    numUno = parseFloat(res);
                }else{
                    numUno = parseFloat(auxNum);
                }

                por = false;
                divide = true;

                auxNum = "";

            }else if(number[i] == 'x'){

                if(numUno !== null){
                    if(por){
                        res = numUno * parseFloat(auxNum);
                    }else{
                        res = numUno / parseFloat(auxNum);
                    }

                    numUno = parseFloat(res);
                }else{
                    numUno = parseFloat(auxNum);
                }


                por = true;
                divide = false;

                auxNum = "";
            }
        }

        if((cola[cola.length-1] == '+' || cola[cola.length-1] == '-') && por && divide){
            cola += auxNum;
        }else if(por){
            res = numUno * parseFloat(auxNum);
            cola += res + '';
        }else{
            res = numUno / parseFloat(auxNum);
            cola += res + '';
        }



        numUno = null;
        auxNum = "";

        //true suma
        let op = true;

        for(let i=0 ; i<cola.length ; i++){

            if(!isNaN(parseFloat(cola[i])) || number[i] == '.'){
                auxNum += cola[i];
            }else{
                if(numUno !== null && cola[i] == '+'){
                    if(op) numUno = numUno + parseFloat(auxNum);
                    else numUno = numUno - parseFloat(auxNum);

                    op = true;
                }else if(numUno !== null && cola[i] == '-'){
                    if(op) numUno = numUno + parseFloat(auxNum);
                    else numUno = numUno - parseFloat(auxNum);

                    op = false;
                }else if(numUno === null && cola[i] == '-'){
                    numUno = parseFloat(auxNum);
                    op = false;
                }else{
                    numUno = parseFloat(auxNum);
                    op = true;
                }

                auxNum = "";
            }

        }
        console.log(cola);

        if(op){
            numUno = numUno + parseFloat(auxNum);
        }else{
            numUno = numUno - parseFloat(auxNum);
        }

        cola = numUno + '';

        if(cola == 'NaN'){
            setNumber('Indeterminate')
            return;
        }

        console.log(numUno)
        setNumber(cola);
    }

    const handleSetTheme = (num) => {
        setTheme(num)
    }

    function handleTheme (){
        if(theme == 1){
            return '';
        }else if(theme == 2){
            return 'uno';
        }else{
            return 'dos';
        }
    }

    return(
        <>
            <div className={`body ${handleTheme()}`}>
                <div className={`container-all ${handleTheme()}`}>
                    <div className="head-container">
                        <span>calc</span>
                        <div className="switch">
                            <div className="inputs-container">
                                <label className="label1">1</label>
                                <input onClick={() => handleSetTheme(1)} name="radio-button" type="radio" className="radio1"></input>

                                <label className="label2">2</label>
                                <input onClick={() => handleSetTheme(2)} name="radio-button" type="radio" className="radio2"></input>

                                <label className="label3">3</label>
                                <input onClick={() => handleSetTheme(3)} name="radio-button" type="radio" className="radio3"></input>

                                <div id="vacio"></div>
                            </div>
                        </div>
                    </div>

                    <input value={number} readOnly></input>

                    <div className="buttons-container">
                        <Button symbol={"7"} clase={"num7"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"8"} clase={"num8"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"9"} clase={"num9"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"DEL"} clase={"DEL"} handleSetNumber={handleDelete} theme={theme}/>

                        <Button symbol={"4"} clase={"num4"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"5"} clase={"num5"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"6"} clase={"num6"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"+"} clase={"MAS"} handleSetNumber={handleSetNumber} theme={theme}/>

                        <Button symbol={"1"} clase={"num1"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"2"} clase={"num2"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"3"} clase={"num3"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"-"} clase={"MENOS"} handleSetNumber={handleSetNumber} theme={theme}/>

                        <Button symbol={"."} clase={"PUNTO"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"0"} clase={"num0"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"/"} clase={"DIAGONAL"} handleSetNumber={handleSetNumber} theme={theme}/>
                        <Button symbol={"x"} clase={"POR"} handleSetNumber={handleSetNumber} theme={theme}/>

                        <Button symbol={"RESET"} clase={"RESET"} handleSetNumber={handleReset} theme={theme}/>
                        <Button symbol={"="} clase={"IGUAL"} handleSetNumber={handleIgual} theme={theme}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculadora