import React from 'react'
import './SideBar.css'
import { GrUpdate } from 'react-icons/gr';
import { FaPen } from "react-icons/fa";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from "../HomePage/HomePage"
import TVK from "../TVK/TVK"
import Users from "../Users/Users"
import { GoRequestChanges } from "react-icons/go";
import Requests from '../Request/Requests';
// import { Link } from 'react-router-dom';


export default function SideBar() {
    return (
        <div>
            <div className="nav-side-menu">
                <div className="brand"><img src="logo.png" alt="" /></div>
                <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                <div className="menu-list mt-5">

                    <ul id="menu-content" className="menu-content collapse out">


                        <li data-toggle="collapse" data-target="#products" className="collapsed active">

                            <a href="#"><FaPen icon="fa-regular fa-pen" /> Update <span className="arrow"></span></a>
                        </li>

                        <ul className="sub-menu collapse" id="products">
                            <li className="active"><Link to='/'>Daily</Link></li>

                            <li><Link to='/tvk'>TVK</Link></li>

                        </ul>

                        <Link to='/users' style={{ textDecoration: 'none', color: 'white' }}>
                            <li data-toggle="collapse" data-target="#service" className="collapsed">
                                <GoRequestChanges /> Request <span className="arrow"></span>
                            </li>
                        </Link>
                        <ul className="sub-menu collapse" id="service">
                            <li>Poineer</li>
                            <li>Advanced</li>
                            <li>Hero</li>
                        </ul>

                    </ul>
                </div>

            </div>



        </div>
    )
}
