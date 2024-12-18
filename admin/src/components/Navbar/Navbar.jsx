import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <img src={assets.homekart_logo} alt="HomeKart Logo" className="navbar-logo" />
                </Link>

                <Link to="/" className="nav-brand">
                    <h1>HomeKart Admin Panel</h1>
                </Link>
            </div>
            <div style={{ color: 'white' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src={assets.profile_image} style={{ width: '30px' }} />
                </div>
                <div style={{display:'flex',gap:'10px'}}>
                    <h4>Profile </h4>
                    <p><u><i>Username</i></u></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
