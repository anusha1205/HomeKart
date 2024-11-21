import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        setIsLogin(false); // Reset to signup form when closing the modal
    };

    const switchToLogin = () => {
        setIsLogin(true);
    };

    const switchToSignup = () => {
        setIsLogin(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo-link">
                    <img src={assets.homekart_logo} alt="HomeKart Logo" className="navbar-logo" />
                </Link>

                <Link to="/" className="logo-link">
                    <h1 className="navbar-title">HomeKart</h1>
                </Link>
            </div>

            <div className="navbar-right">
                <Link to="/Favourite" className="navbar-button">Favourites ❤️</Link>
                <Link to="/Cart" className="navbar-button">Cart 🛒</Link>
                <Link to="/Queries" className="navbar-button">Queries 📧</Link>
                <button className="navbar-button" onClick={toggleModal}>
                    Login/Signup
                </button>
            </div>

            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="navbar-search"
                />
                <a href="">
                    <img
                        src={assets.search_icon}
                        alt=""
                        style={{ width: '100%', borderRadius: '100%' }}
                    />
                </a>
            </div>

            {/* Modal Section */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="modal-close" onClick={toggleModal}>
                            &times;
                        </button>
                        <div className="modal-split">
                            {/* Left Section */}
                            <div className="modal-left">
                                <h2>Welcome to HomeKart</h2>
                                <p>Your one-stop platform for buying and selling home products.</p>
                            </div>

                            {/* Right Section */}
                            <div className="modal-right">
                                {isLogin ? (
                                    <>
                                        <h3>Login</h3>
                                        <form>
                                            <label>
                                                Username:
                                                <input type="text" placeholder="Enter your username" required />
                                            </label>
                                            <label>
                                                Password:
                                                <input
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                            </label>
                                            <label>
                                                Role:
                                                <select required>
                                                    <option value="" disabled selected>
                                                        Select your role
                                                    </option>
                                                    <option value="seller">Seller</option>
                                                    <option value="customer">Customer</option>
                                                    <option value="delivery_agent">Delivery Agent</option>
                                                </select>
                                            </label>
                                            <button type="submit" className="modal-submit">
                                                Login
                                            </button>
                                        </form>
                                        <p>
                                            Don't have an account?{' '}
                                            <button
                                                type="button"
                                                className="modal-switch"
                                                onClick={switchToSignup}
                                            >
                                                Signup
                                            </button>
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3>Signup</h3>
                                        <form>
                                            <label>
                                                Name:
                                                <input type="text" placeholder="Enter your full name" required />
                                            </label>
                                            <label>
                                                Username:
                                                <input type="text" placeholder="Choose a unique username" required />
                                            </label>
                                            <label>
                                                Password:
                                                <input
                                                    type="password"
                                                    placeholder="Enter a strong password"
                                                    required
                                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters."
                                                />
                                            </label>
                                            <label>
                                                Confirm Password:
                                                <input
                                                    type="password"
                                                    placeholder="Confirm your password"
                                                    required
                                                />
                                            </label>
                                            <label>
                                                Role:
                                                <select required>
                                                    <option value="" disabled selected>
                                                        Select your role
                                                    </option>
                                                    <option value="seller">Seller</option>
                                                    <option value="customer">Customer</option>
                                                    <option value="delivery_agent">Delivery Agent</option>
                                                </select>
                                            </label>
                                            <button type="submit" className="modal-submit">
                                                Create Account
                                            </button>
                                        </form>
                                        <p>
                                            Already have an account?{' '}
                                            <button
                                                type="button"
                                                className="modal-switch"
                                                onClick={switchToLogin}
                                            >
                                                Login
                                            </button>
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
