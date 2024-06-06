import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import googlepng from './google.png'
import axios from 'axios';
import { useState } from 'react';

export default function Login(props) {
    const [error, setError] = useState("");
    const [data, setData] = React.useState({
        email: '',
        password: ''
    })

    const handleClick = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const url = "http://localhost:3004/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"; // Redirect to homepage on successful login
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className='lgn-container'>
            <div className="main-login" style={{ backgroundColor: props.theme === 'light' ? 'aliceblue' : 'rgb(46, 45, 45)' }}>
                <div className="lgn-png">
                    <FontAwesomeIcon className='fs-1' style={{ color: '#ffc011' }} icon={faUser} />
                    <span className='fs-2' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>LOGIN</span>
                </div>
                <form onSubmit={handleSubmit}>  {/* Wrap form elements here */}
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                        >
                            <Form.Control type="email" placeholder="name@example.com" name='email'
                                value={data.email} required onChange={handleClick} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" name='password'
                                value={data.password} required onChange={handleClick} />
                        </FloatingLabel>
                    </>
                    {error && <div className=''>{error}</div>}
                    <button className='btn' style={{ backgroundColor: '#ffc011' }}>Login</button>  {/* Button doesn't need Link here */}
                </form>
                <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>If you have no Account ? <Link to='/Signup'>Signup</Link></span>
                <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Continue with <Link ><img src={googlepng} alt="" /></Link> </span>
            </div>
        </div>
    )
}
