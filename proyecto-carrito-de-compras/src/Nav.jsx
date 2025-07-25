export default function Nav(){

    return(
        <>
            <nav className="nav">
                <div className="nav-izq">
                    <div className="logo-container">
                        
                    </div>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="nav-der">
                    <button className="carrito-button"></button>
                    <div className="perfil"></div>
                </div>
            </nav>


        </>
    );
}