import React from "react";
import './topbar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topleft">
               <i className="topicon bi bi-facebook" ></i>
                <i className="topicon bi bi-twitter"></i>
                <i className="topicon bi bi-instagram"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem"><Link className='link' to='/'> HOME</Link></li>
                    <li className="toplistitem"><Link className='link' to='/'>ABOUT</Link></li>
                    <li className="toplistitem"><Link className='link' to='/contact '>CONTACT</Link></li>
                    <li className="toplistitem"><Link className='link' to='/write'>WRITE</Link></li>
                    <li className="toplistitem">{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topright">
                {
                    user ?
                        (<img className="topimg" src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png" alt="prof" />)
                        : (<ul className="toplist">
                            <li className="toplistitem"><Link className='link' to='/login'>LOGIN</Link></li>
                            <li className="toplistitem"><Link className='link' to='/register'>REGISTER</Link></li>
                        </ul>)
                }
                <i class="topsearchicon bi bi-search"> </i>
            </div>
        </div>
    )
}