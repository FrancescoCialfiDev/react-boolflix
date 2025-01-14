export const HeaderComponent = () => {

    return (

        <header>
            <nav id="mainNav" className="navbar navbar-expand-lg bg-black p-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <a className="navbar-brand" href="#">
                            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Bootstrap" width="130" height="60" />
                        </a>


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Contentent</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Contacts</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">About Us</a></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="dropdown mx-2">
                                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>

    )
}