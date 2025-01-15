export const JumboComponent = ({ data }) => {
    const firstItem = data[0];

    return (
        <div id={data.id} className="jumbo position-relative top-0 start-0">
            <img
                src={`https://image.tmdb.org/t/p/original/${firstItem?.backdrop_path}`}
                className="img-fluid"
                alt={firstItem?.title || "Image not available"}
            />
            <div className="contenitoreOverlay text-white fs-5">
                <h2>{firstItem?.title}</h2>
                <p>Original Title: {firstItem?.original_title}</p>
                <p className="w-50">
                    Descrizione: {firstItem?.overview?.slice(0, 200)}...
                </p>
            </div>
        </div>
    );
};