import { createContext } from 'react' // Importiamo il metodo createContext di React
const GlobalContext = createContext() // Creaiamo il contesto glovale creando un instanza del metodo createContext
import axios from 'axios' // Importiamo la libreria axios per effettuare le chiamate API
import { useState, useEffect } from 'react' // Importiamo lo useState e lo useEffect di React

const GlobalProvider = ({ children }) => {
    {
        /* Stato della variabile movies - Chiamata axios verso API film - Utilizzo di UseEffect*/
    }
    const [movies, setMovies] = useState([])
    const getMovies = () => {
        axios
            .get(
                `${import.meta.env.VITE_BASE_URL}/movie/popular?${import.meta.env.VITE_API_KEY
                }&language=it-IT&page=1`
            )
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.log(error))
            .finally(console.log('Data Fetch Completed'))
    }
    useEffect(getMovies, [])

    {
        /* Stato della variabile series - Chiamata axios verso API series - Utilizzo di UseEffect*/
    }
    const [series, setSeries] = useState([])
    const getSeries = () => {
        axios
            .get(
                `${import.meta.env.VITE_BASE_URL}/tv/popular?${import.meta.env.VITE_API_KEY
                }&language=it-IT&page=1`
            )
            .then((res) => setSeries(res.data.results))
            .catch((error) => console.log(error))
            .finally(console.log('Data Fetch Completed'))
    }
    useEffect(getSeries, [])

    return (
        <>
            <GlobalContext.Provider value={{ movies, series, setMovies, setSeries }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export { GlobalProvider, GlobalContext }
