import { CardComponent } from "./CardComponent"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export const MainComponent = () => {

    const { movies, series } = useContext(GlobalContext)
    console.log(movies);

    return (

        <main className="bg-dark">
            <div className="container">
                <section className="row text-white">
                    {movies.length > 0 && <h2 className="my-3">Movies</h2>}
                    <CardComponent data={movies} />
                </section>
                {movies.length == 0 && series.length == 0 ? <div className="text-white">Nessun Contenuto Disponibile</div> : "null"}
                <section className="row text-white">
                    {series.length > 0 && <h2 className="my-3">TV Series</h2>}
                    <CardComponent data={series} />
                </section>
            </div>
        </main >

    )

}