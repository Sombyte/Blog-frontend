import React from "react";
import './sidebar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Sideimg from '../asset/sideimg.jpg';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartital">ABOUT ME</span>
                <img src={Sideimg} alt="sideimg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam dignissimos impedit doloremque
                    facere atque officiis repellat, voluptates harum sapiente commodi ipsa quae fugiat aliquid laboriosam,
                    obcaecati soluta! Quasi, ad.</p>
            </div>
            <div className="sidebaritem">
                <span className='sidebartital'> CATEGORIES</span>
                <ul className="sidebarlist">
                    <li className="sidbarlistitem">Life</li>
                    <li className="sidbarlistitem">Style</li>
                    <li className="sidbarlistitem">Tech</li>
                    <li className="sidbarlistitem">Music</li>
                    <li className="sidbarlistitem">Movies</li>
                </ul>
            </div>
            <div className="sidebaritem">Like  Shere</div>
            <ul className="sidebarsocial">
                <li className="sideicon bi bi-hand-thumbs-up"></li>
                <li className="sideicon bi bi-share"></li>
                
            </ul>

        </div>
    )
}

