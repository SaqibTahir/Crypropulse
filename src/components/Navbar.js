import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColonSign, faStar, faRobot } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import { useState } from 'react'

export default function Navbar(props) {
    // const [hidden, sethiddden] = useState('')
    const location = useLocation()
    return (
        <nav style={{ padding: '6px 54px' }} className={`navbar navbar-expand-lg fixed-top navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid ">
                <Link className="navbar-brand d-flex align-items-center fs-4 fw-bold" to="/"><FontAwesomeIcon icon={faColonSign} className='mx-1 fs-1' style={{ color: '#ffc011' }} />Crypto <span className=' mx-1 fw-light' style={{ color: '#ffc011' }}>Pulse</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto text-center mb-2 mb-lg-0  ">

                        <div className={`navlist adjust ${location.pathname === '/crypto' ? 'hidden' : ""}`} >
                            <li className="nav-item">
                                <Link  aria-current="page" to="/contact" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Contact & FAQs</Link>
                            </li>
                        </div>
                        <div className={`navlist adjust ${location.pathname === '/' || location.pathname==='/Diff' ? 'hidden' : "" || location.pathname==='/contact' ? 'hidden' : ""}`} >
                            <li className="nav-item">
                                <a  aria-current="page" href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a  href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Learn</a>
                            </li>
                            <li className="nav-item">
                                <a  href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>News</a>
                            </li>
                        </div>

                    </ul>
                    <div className={`navlist   ${location.pathname === '/' ? 'hidden' : "" || location.pathname==='/contact' ? 'hidden' : ""}`} >
                        <li className="nav-item " >
                            <a aria-current="page" href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }}> <FontAwesomeIcon icon={faStar} style={{ color: '#ffc011' }} /> Watchlist</a>
                        </li>
                        <li className="nav-item">
                            <a aria-current="page" href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }}> <FontAwesomeIcon style={{ color: '#ffc011' }} icon={faRobot} /> Bot</a>
                        </li>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-2">
                        <label className="ui-switch">
                            <input type="checkbox" onChange={() => props.changetheme()} />
                            <div className="slider">
                                <div className="circle"></div>
                            </div>
                        </label>

                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <Link className={`${location.pathname === '/' ? '' : "hidden" && location.pathname==='/contact' ? '' : "hidden"}`} to='/Login'>
                            <button type="button" className=" nav-btn mx-3 ">
                                Log In </button></Link>
                        <Link className={`${location.pathname === '/' ? '' : "hidden" && location.pathname==='/contact' ? '' : "hidden"}`} to='/Signup'><button type="button" className=" nav-btn " >Sign Up</button></Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}


