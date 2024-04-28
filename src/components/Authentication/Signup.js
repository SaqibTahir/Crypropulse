import React from 'react'
import './Signup.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import googlepng from './google.png'

export default function Signup(props) {
    return (
        <div className='lgn-container'>
            <div className="main-signup" style={{ backgroundColor: props.theme === 'light' ? 'aliceblue' : 'rgb(46, 45, 45)' }}>
                <div className="lgn-png">
                    <FontAwesomeIcon className='fs-1' style={{ color:'#ffc011' }} icon={faUser} />
                    <span className='fs-2' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>SIGNUP</span>
                </div>
                <>
                    <div className="name-tag ">
                        <FloatingLabel controlId="floatingPassword" label="First Name">
                            <Form.Control type="input" placeholder="Password" />
                        </FloatingLabel><FloatingLabel controlId="floatingPassword" label="Last Name">
                            <Form.Control type="input" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label=" Confirm Password" >
                        <Form.Control  type="password" placeholder="Password" />
                    </FloatingLabel>
                </>
                <button className='btn' style={{ backgroundColor:'#ffc011' }}>Signup</button>
                <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Continue with <Link><img src={googlepng} alt="" /></Link> </span>
            </div>
        </div>
    )
}
