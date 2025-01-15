
export const JumboComponent = ({ data }) => {

    return (

        <div className="jumbo">
            <img src={`https://image.tmdb.org/t/p/original/${data[0]?.poster_path}`} className="object-fit-cover" />
        </div>

    )

}