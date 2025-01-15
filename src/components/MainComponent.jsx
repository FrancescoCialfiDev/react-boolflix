import { CardComponent } from "./CardComponent"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { JumboComponent } from "./JumboComponent"

export const MainComponent = () => {

    const { movies, series } = useContext(GlobalContext)
    console.log(movies);
    console.log(series);

    return (

        <main className="bg-dark">
            <JumboComponent data={movies} />
            {movies.length === 0 && series.length === 0 ?
                <div className="noContent d-flex justify-content-center align-items-center text-white">Nessun Contenuto Disponibile</div>
                : <div className="container p-2">
                    <section className="row text-white">
                        {movies.length > 0 && <h2 className="my-3">Movies</h2>}
                        <CardComponent data={movies} />
                    </section>

                    <section className="row text-white">
                        {series.length > 0 && <h2 className="my-3">TV Series</h2>}
                        <CardComponent data={series} />
                    </section>
                </div>}
        </main >

    )

}