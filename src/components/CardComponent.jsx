// Per mezzo di una prop passiamo i dati tramite callback e li utilizziamo per implementare la logica per la generazione delle card.
export const CardComponent = ({ data }) => {

    return (
        data.map((element, index) => (
            index < 8 &&
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 my-2" key={element.id} >
                <div className="card" >
                    <img src={"https://image.tmdb.org/t/p/w500" + element.poster_path} className="card-img-top" alt="..." />
                    <div className="content d-flex flex-column m-2">
                        <h5 className="card-title">{element.title}</h5>
                        <span>Original Title: {element.original_title}</span>
                        <div className="d-flex">
                            <span>Language: </span>
                            <img id="flag" src={`https://flagsapi.com/${element.original_language.toUpperCase()}/flat/64.png`} className=" mx-2 card-text" />
                        </div>
                        <span className="btn btn-dark">{element.vote_average}</span>
                    </div>
                </div>
            </div >
        ))
    )

}