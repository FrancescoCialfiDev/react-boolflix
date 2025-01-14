import { createContext } from "react"
export const GlobalContext = createContext()
import axios from "axios"
import { useState, useEffect } from "react"

export const GlobalProvider = ({ children }) => {

    const [data, setData] = useState([])
    const getData = () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/movie/popular?${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`)
            .then((res) => { setData(res.data.results); console.log(res.data.results) })
            .catch((error) => console.log(error))
            .finally(console.log("Data Fetch Completed"))
    }

    useEffect(getData, [])

    return (
        <>
            <GlobalContext.Provider value={{ data }}>
                {children}
            </GlobalContext.Provider>
        </>
    )

}