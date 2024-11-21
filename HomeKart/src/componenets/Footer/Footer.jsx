import React from 'react';
import './Footer.css'; // Add a new CSS file for footer styles
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="contact-section">
            <div className="contact-content">
                <div className="logo">
                    <img src={assets.homekart_logo} alt="HomeKart Logo" />
                </div>
                <div className='contact-second-box'>
                    <div className='contact-2-1'>
                        <p className="contact-email">
                            Email us: <a href="mailto:support@homekart.com">support@homekart.com</a>
                        </p>
                        <div className="app-download">
                            <a href="/download/android" className="app-link">
                                <img
                                    src={assets.android_icon}
                                    alt="Download on Android"
                                    style={{ width: '40px', marginRight: '5px' ,  }}
                                />
                                Android
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>CUSTOMER POLICIES</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Grievance Officer</li>
                        </ul>
                    </div>

                </div>
            </div>
            <section className="query-section">
                <h3>Have a Question? Let Us Know!</h3>
                <form className="query-form">
                    <input type="text" placeholder="Your Name" className="query-input" required />
                    <input type="email" placeholder="Your Email" className="query-input" required />
                    <textarea
                        placeholder="Write your query here..."
                        className="query-textarea"
                        rows="4"
                        required
                    ></textarea>
                    <button type="submit" className="query-submit-button">
                        Submit Query
                    </button>
                </form>
            </section>
        </footer>
    );
};

export default Footer;
