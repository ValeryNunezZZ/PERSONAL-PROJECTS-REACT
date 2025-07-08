import './App.css'

function Button({symbol, clase, handleSetNumber, theme}){

    const handleFunction = () => {
        if(symbol == '='){
            handleSetNumber();
        }else{
            handleSetNumber(symbol);
        }
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
            <button onClick={handleFunction} className={`${clase} ${handleTheme()}`}>{`${symbol}`}</button>
        </>
    );
}

export default Button