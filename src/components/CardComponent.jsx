import axios from "axios"
import { useState, useEffect } from "react"

export const CardComponent = () => {

    const [data, setData] = useState([])
    const getData = () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/movie/popular?${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`)
            .then((res) => { setData(res.data.results); console.log(res.data.results) })
            .catch((error) => console.log(error))
            .finally(console.log("Data Fetch Completed"))
    }

    useEffect(getData, [])

    return (

        data.map((element, index) => (

            <div className="col-12 col-md-6 col-xl-3 my-4" key={index}>
                <div className="card" >
                    <img src={"https://image.tmdb.org/t/p/w500" + element.poster_path} className="card-img-top" alt="..." />
                </div>
            </div>

        ))

    )

}