import React from "react";
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headertiles">
                <span className="headertilesNR">NODE & REACT</span>
                <span className="headertilesB">Blog</span>
            </div>
            <img className="bgimg" src='https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_1280.jpg' alt='bgimg' />
        </div>
    )
}