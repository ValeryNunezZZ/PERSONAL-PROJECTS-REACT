import moon from './img/moon.png'

function Nav({setDarkMode, darkMode}){
    return(
        <>
            <nav className={`${darkMode?'dark':''}`}>
                <h1>Where in the world?</h1>
                
                <div onClick={()=>{
                    if(darkMode) return setDarkMode(false);
                    else return setDarkMode(true);
                }} className="darkMode-container">
                    <span><img src={moon}></img></span>
                    <span>Dark mode</span>
                </div>
            </nav>
        </>
    );
}

export default Nav