import { CardComponent } from "./CardComponent"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


export const MainComponent = () => {

    const { movies, series } = useContext(GlobalContext)

    return (

        <main className="bg-dark h-100 w-100">
            <div className="container">
                <section className="row text-white">
                    <h2 className="my-3">Movies</h2>
                    <CardComponent data={movies} />
                </section>
                <section className="row text-white">
                    <h2 className="my-3">TV Series</h2>
                    <CardComponent data={series} />
                </section>
            </div>
        </main >

    )

}