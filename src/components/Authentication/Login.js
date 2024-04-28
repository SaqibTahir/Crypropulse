import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import googlepng from './google.png'

export default function Login(props) {
    return (
        <div className='lgn-container'>
            <div className="main-login" style={{backgroundColor:props.theme==='light' ? 'aliceblue':'rgb(46, 45, 45)'}}>
                <div className="lgn-png">
                    <FontAwesomeIcon className='fs-1' style={{color:'#ffc011'}} icon={faUser} />
                    <span className='fs-2' style={{color:props.theme==='light' ? 'black':'white'}}>LOGIN</span>
                </div>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </>
                <button className='btn' style={{backgroundColor:'#ffc011'}}> <Link to='/crypto'>Login</Link></button>
                <span className='no-account' style={{color:props.theme==='light' ? 'black':'white'}}>If you have no Account ? <Link to='/Signup'> Signup</Link></span>
                <span  className='no-account' style={{color:props.theme==='light' ? 'black':'white'}}> Continue with <Link ><img src={googlepng} alt="" /></Link> </span>
            </div>
        </div>
    )
}
