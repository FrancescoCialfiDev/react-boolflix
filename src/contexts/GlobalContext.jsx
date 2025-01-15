import { createContext } from 'react'; // Importiamo il metodo createContext di React
import axios from 'axios'; // Importiamo la libreria axios per effettuare le chiamate API
import { useState, useEffect } from 'react'; // Importiamo lo useState e lo useEffect di React

// Creiamo il contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // Stato della variabile movies e funzione per ottenere i dati dai film
    const [movies, setMovies] = useState([]);
    const getMovies = () => {
        axios
            .get(
                `${import.meta.env.VITE_BASE_URL}/movie/popular?${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`
            )
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.error('Errore fetching movies:', error))
            .finally(() => console.log('Data Fetch Completed'));
    };
    useEffect(getMovies, []);

    // Stato della variabile series e funzione per ottenere i dati dalle serie
    const [series, setSeries] = useState([]);
    const getSeries = () => {
        axios
            .get(
                `${import.meta.env.VITE_BASE_URL}/tv/popular?${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`
            )
            .then((res) => setSeries(res.data.results))
            .catch((error) => console.error('Errore fetching series:', error))
            .finally(() => console.log('Data Fetch Completed'));
    };
    useEffect(getSeries, []);


    return (
        <GlobalContext.Provider value={{ movies, series, setMovies, setSeries }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };
