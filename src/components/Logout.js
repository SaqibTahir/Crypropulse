import React, { useContext, useEffect } from 'react'
import { WatchlistContext } from '../Context/Watchlistcontext'
import { useNavigate, Link } from 'react-router-dom'

export default function Logout() {
    const {userData} = useContext(WatchlistContext)
    const navigate = useNavigate
    const removeAuthToken=()=>{
        localStorage.setItem('token', '')
    }
    // useEffect(()=>{
    //     removeAuthToken()
    // })
    return (
        <div>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you want to Logout</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {userData.email}
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <Link to='/'>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>{
                                removeAuthToken()
                            }}
                            
                            >Logout</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
