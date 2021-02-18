import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const linkStyle = {
        textDecoration:'none'
    }

    const content = ["about", "background", "skills", "experiences", "contact"]
    
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-custom navbar-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto smooth-scroll">
                <li className="nav-item">
                    <Link to="/" style={linkStyle} className="nav-link">home <span className="sr-only">(current)</span></Link>
                </li>

                {content.map((item, index) => {
                    return (
                    <li className="nav-item" key={index}>
                        <Link to={`/${item}`} style={linkStyle} className="nav-link">{item}</Link>
                    </li>
                    )
                })}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
