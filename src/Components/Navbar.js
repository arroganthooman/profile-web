import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const linkStyle = {
        textDecoration:'none'
    }
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-custom navbar-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto smooth-scroll">
                <Link to="/" style={linkStyle}>
                    <li className="nav-item">
                        <a className="nav-link">home <span className="sr-only">(current)</span></a>
                    </li>
                </Link>
                <Link to="/about" style={linkStyle}>
                <li className="nav-item">
                    <a className="nav-link">about</a>
                </li>
                </Link>
                <Link to="/background" style={linkStyle}>
                <li className="nav-item">
                    <a className="nav-link">background</a>
                </li>
                </Link>
                <Link to="/skills" style={linkStyle}>
                <li className="nav-item">
                    <a className="nav-link">skills</a>
                </li>
                </Link>
                <Link to="/experiences" style={linkStyle}>
                <li className="nav-item">
                    <a className="nav-link">experiences</a>
                </li>
                </Link>
                <Link to="/contact" style={linkStyle}>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">contact</a>
                </li>
                </Link>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    more
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="{%url 'story1'%}">story 1</a>
                    <a className="dropdown-item" href="#">story 3</a>
                    <a className="dropdown-item" href="{%url 'data_matkul'%}">story 5</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="{% url 'projects'%}">projects</a>
                    </div>
                </li> */}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
