function PaisSelected({infoPaisSelected, handleDeseleccionarPais}){

    return(
        <>
            <div className="pais-selected-container">

                <button onClick={()=>{handleDeseleccionarPais()}} className="back">Back</button>

                <div className="pais-desc-container">
                    <div className="pais-desc-container-bandera-container">
                        <img src={infoPaisSelected.flag}></img>
                    </div>

                    <div className="pais-desc-container-desc-container">
                        <h2>{infoPaisSelected.name}</h2>
                        <div className="top-container">
                            <div className="izq-container">
                                <div className="mini-info-container">
                                    <label>Native Name: </label>
                                    <span>{infoPaisSelected.nativeName}</span>
                                </div>

                                <div className="mini-info-container">
                                    <label>Population: </label>
                                    <span>{infoPaisSelected.population}</span>
                                </div>

                                <div className="mini-info-container">
                                    <label>Region: </label>
                                    <span>{infoPaisSelected.region}</span>
                                </div>

                                <div className="mini-info-container">
                                    <label>Sub Region: </label>
                                    <span>{infoPaisSelected.subregion}</span>
                                </div>

                                <div className="mini-info-container">
                                    <label>Capital: </label>
                                    <span>{infoPaisSelected.capital}</span>
                                </div>
                            </div>

                            <div className="der-container">
                                <div className="mini-info-container">
                                    <label>Top Level Domain: </label>
                                    {
                                        infoPaisSelected.topLevelDomain.map((b, index)=><span key={index} className="tld-span">{b + ((index == infoPaisSelected.topLevelDomain.length - 1)?(''):(', '))}</span>)
                                    }
                                </div>

                                <div className="mini-info-container">
                                    <label>Currencies: </label>
                                    {
                                        infoPaisSelected.currencies.map((c, index)=><span key={index} className="c-span">{c.name + ((index == infoPaisSelected.currencies.length - 1)?(''):(', '))}</span>)
                                    }
                                </div>

                                <div className="mini-info-container">
                                    <label>Languajes: </label>
                                    {
                                        infoPaisSelected.languages.map((l, index)=><span key={index} className="l-span">{l.name + ((index == infoPaisSelected.languages.length - 1)?(''):(', '))}</span>)
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            (infoPaisSelected.borders == undefined)?(
                            <></>
                            ):(
                                <div className="border-countries-container">
                                <label>Border Countries: </label>
                                    {
                                        infoPaisSelected.borders.map((b, index)=><span className="bc-span" key={index}>{b}</span>)
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default PaisSelected