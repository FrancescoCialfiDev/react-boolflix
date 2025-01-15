import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export const HeaderComponent = () => {
    const { setMovies, setSeries } = useContext(GlobalContext)
    {/* Stato della variabile series - Chiamata axios verso API series - Utilizzo di UseEffect*/ }
    const [searchBar, setSearchBar] = useState("")

    function changeValue(e) {
        e.preventDefault()
        setSearchBar(e.target.value)
    }

    const getFiltredMovies = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchBar}&${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`)
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.log(error))
            .finally(console.log("Data Fetch Completed"))
        axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchBar}&${import.meta.env.VITE_API_KEY}&language=it-IT&page=1`)
            .then((res) => setSeries(res.data.results))
            .catch((error) => console.log(error))
            .finally(console.log("Data Fetch Completed"))
    }
    useEffect(getFiltredMovies, [])



    return (

        <header>
            <nav id="navMain" className="navbar navbar-expand-lg bg-black p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" width="130" height="60" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Content</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Contacts</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">About Us</a></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="dropdown mx-2">
                            <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={changeValue} />
                        <button className="btn btn-outline-danger" type="button" onClick={getFiltredMovies}>Search</button>
                    </form>
                </div>
            </nav>
        </header>

    )
}