import { CardComponent } from "./CardComponent";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { JumboComponent } from "./JumboComponent";

export const MainComponent = () => {
    const { movies, series } = useContext(GlobalContext);
    console.log(movies);
    console.log(series);

    return (
        <main className="bg-dark">
            {movies.length === 0 && series.length === 0 ? (
                <div className="noContent d-flex justify-content-center align-items-center text-white">
                    Nessun Contenuto Disponibile
                </div>
            ) : (
                <>
                    <JumboComponent data={movies} />
                    <div className="container p-2">
                        {/* Movies Section */}
                        {movies.length > 0 && (
                            <section className="row text-white">
                                <h2 className="my-3">Movies</h2>
                                <CardComponent data={movies} />
                            </section>
                        )}

                        {/* TV Series Section */}
                        {series.length > 0 && (
                            <section className="row text-white">
                                <h2 className="my-3">TV Series</h2>
                                <CardComponent data={series} />
                            </section>
                        )}
                    </div>
                </>
            )}
        </main>
    );
};
