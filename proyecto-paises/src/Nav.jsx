import moon from './img/moon.png'
function Nav(){
    return(
        <>
            <nav>
                <h1>Where in the world?</h1>
                
                <div className="darkMode-container">
                    <span><img src={moon}></img></span>
                    <span>Dark mode</span>
                </div>
            </nav>
        </>
    );
}

export default Nav