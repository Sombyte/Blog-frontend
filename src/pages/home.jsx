import React from "react";
import "./home.css";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import Posts from "../component/posts";
export default function home() {
    return (
        <>
            <Header />

            <div className="home">
                <Posts />
                <Sidebar />

            </div>
        </>
    )
}