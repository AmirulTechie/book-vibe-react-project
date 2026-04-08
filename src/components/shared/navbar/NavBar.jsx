import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
        <li>
            <NavLink
                to={"/"}
                className={({ isActive }) => `font-bold ${isActive ? "text-green-500 border border-green-500" : ""}`}
            >
                Home
            </NavLink>
        
        </li>
        <li>
            <NavLink to={"/books"} 
                className={({ isActive }) => `font-bold mx-5 ${isActive ? "text-green-500 border border-green-500" : ""}`}
            >
                Listed Books
                </NavLink>
                </li>

        <li>
            <NavLink to={"/page-to-read"} 
                className={({ isActive }) => `font-bold ${isActive ? "text-green-500 border border-green-500" : ""}`}
            >
            Pages to Read
            </NavLink></li>
    </>
    return (
        <nav className='bg-base-100 shadow-sm '>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;