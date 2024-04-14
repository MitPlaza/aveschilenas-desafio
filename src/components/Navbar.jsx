import {Link} from "react-router-dom"

const Navbar = () => {

    return(
        <nav className="navbar navbar-dark fixed-top bg-dark">
            <div className="container">
            <Link to="/">Home</Link>
            <Link to="/Favoritos">Favoritos</Link>
            </div>
        </nav>
    )
}

export default Navbar