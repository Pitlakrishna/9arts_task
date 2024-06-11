import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../../images/logo.svg"
import logo from "../../images/logo.svg"
import "./index.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="" >
                    <img className='image-logo' src={logo} alt="logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className="button-search" type="button"   >
                        ENROLL NOW
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar