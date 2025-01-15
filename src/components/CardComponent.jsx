// Per mezzo di una prop passiamo i dati tramite callback e li utilizziamo per implementare la logica per la generazione delle card.
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

export const CardComponent = ({ data }) => {

    // Funzione per generare le stelle in base al voto
    const drawStars = (vote_average) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            const star = (i < Math.ceil(Math.min(vote_average, 5)))
                ? (<IoMdStar key={i} />)
                : (<MdOutlineStarBorderPurple500 key={i} />);
            stars.push(star);
        }
        return stars;
    };

    return (
        data.map((element, index) => (
            index < 6 && (
                <div className="col-12 col-sm-6 col-md-3 col-xl-2 my-2" key={element.id}>
                    <div className="overlay position-relative">
                        <div id="card" className="card text-white">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                                className="card-img-top"
                                alt={element.title || element.name}
                                onError={(e) => e.target.src = "https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4="}
                            />
                            <div className="content align-self-center position-absolute top-50 start-50 translate-middle h-100 w-100 p-3">
                                <div className="centered d-flex flex-column justify-content-center align-items-center h-100 text-center">
                                    <h5 className="card-title">{element.title || element.name}</h5>
                                    <span>Original Title: {element.original_title || "Nessun Titolo"}</span>
                                    <div className="d-flex align-items-center">
                                        <span>Language: </span>
                                        <img
                                            id="flag"
                                            src={`https://flagsapi.com/${element.original_language?.toUpperCase()}/shiny/64.png`}
                                            className="mx-2 card-text"
                                            onError={(e) => e.target.src = "https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4="}
                                            alt="Language Flag"
                                        />
                                    </div>
                                    <div className="stars mt-2">{drawStars(element.vote_average)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        ))
    );
};