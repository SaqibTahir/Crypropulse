import React from 'react'
import './Signup.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
import googlepng from './google.png'
import { useState } from 'react';

export default function Signup(props) {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [data, setData] = React.useState({ // Use React.useState for state management
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleClick= ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3004/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
            <div className="main-signup" style={{ backgroundColor: props.theme === 'light' ? 'aliceblue' : 'rgb(46, 45, 45)' }} onSubmit={handleSubmit}>
                <div className="lgn-png">
                    <FontAwesomeIcon className='fs-1' style={{ color: '#ffc011' }} icon={faUser} />
                    <span className='fs-2' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>SIGNUP</span>
                </div>


                <form onSubmit={handleSubmit} >
                    <FloatingLabel controlId="floatingPassword" label="First Name">
                        <Form.Control type="input" placeholder="Firstname" name='firstName'
                            value={data.firstName} required onChange={handleClick} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Last Name">
                        <Form.Control type="input" placeholder="Lastname" name='lastName'
                            value={data.lastName} required onChange={handleClick} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" name='email'
                            value={data.email} required onChange={handleClick} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    {/* <FloatingLabel controlId="floatingPassword" label=" Confirm Password" >
                        <Form.Control type="password" placeholder="Password" name='password'
                            value={data.password} required onChange={handleClick} />
                    </FloatingLabel> */}
                    {error && <div className='my-4'>{error}</div>}
                    <button className='btn' style={{ backgroundColor: '#ffc011' }}>Signup</button>
                </form>
                <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Continue with <Link><img src={googlepng} alt="" /></Link> </span>
            </div>
        </div>
    )
}
