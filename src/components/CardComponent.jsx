import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export const CardComponent = () => {

    const { data } = useContext(GlobalContext)

    return (

        data.map((element, index) => (

            <div className="col-12 col-md-6 col-xl-3 my-2" key={index}>
                <div className="card" >
                    <img src={"https://image.tmdb.org/t/p/w500" + element.poster_path} className="card-img-top" alt="..." />
                </div>
            </div>

        ))

    )

}