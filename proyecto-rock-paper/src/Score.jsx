import logo from './images/logo.svg'

function Score({score}){
    return(
        <>
            <div className='up-container'>
                <img src={logo}></img>
                <div className='score-container'>
                    <span>SCORE</span>
                    <span>{score}</span>
                </div>
            </div>
        </>
    )
}

export default Score;