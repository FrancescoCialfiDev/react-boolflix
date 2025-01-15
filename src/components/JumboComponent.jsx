
export const JumboComponent = ({ data }) => {

    return (

        <div className="jumbo position-relative top-0 start-0">
            <img src={`https://image.tmdb.org/t/p/original/${data[0]?.backdrop_path}`} className="img-fluid" />
            <div className="contenitoreOverlay text-white fs-5">
                <h2>{data[0]?.title}</h2>
                <p>Origina Title: {data[0]?.original_title}</p>
                <p className="w-50">Descrizione: {data[0]?.overview.slice(0, 200) + "..."}</p>
            </div>
        </div>

    )

}