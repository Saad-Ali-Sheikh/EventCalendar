import React from 'react';
import './Navbar.css';
import logo from '../Asserts/2-01.png';
import title from '../Asserts/12-01.png';

function Navbar ()
{
    return (
    <div className="container-fluid">
        <div className="navbar">
                <a className="image" href="#"><img src={logo} width="70px"></img></a>
                <a className="image-2" href="#"><img src={title} width="150px"></img></a>
            <nav>
                <ul>
                    <li className="alpha"><a href="">Home</a></li>
                    <li className="alpha"><a href="">About</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );

}
export default Navbar;