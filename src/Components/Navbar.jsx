import React from "react"
import { Link} from "react-router-dom"

function Navbar() {
    
    return(
        <nav className="navbar">
            <p>Sugar Rush</p>
            <Link to="/"> Home | </Link>
            <Link to="/buy"> Carrinho</Link>
        </nav>
    )
}

export default Navbar