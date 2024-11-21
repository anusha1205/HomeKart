import React, { useState } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';

import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


const Home = () => {
    const [showModal, setShowModal] = useState(false);

    // Example center coordinates (you can change these)
    const center = {
        lat: 20.5937,  // Default to India's center
        lng: 78.9629
    };

    const mapContainerStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '12px'
    };

    // Example sellers locations
    const sellers = [
        { lat: 20.5937, lng: 78.9629, name: "Home Seller 1" },
        { lat: 20.6037, lng: 78.9729, name: "Home Seller 2" },
        { lat: 20.5837, lng: 78.9529, name: "Home Seller 3" },
    ];


    return (
        <div className="home">
            <section className="tagline-section" style={{ backgroundColor: '#e3bed0' }}>
                <div className="tagline-content">
                    <h2>Your One-Stop Shop for Unique Home Products</h2>
                    <p><ul><li>HomeKart connects buyers with the best home-based entrepreneurs.</li></ul></p>
                    <p><ul><li>Discover a wide variety of products from home decor to essentials,
                        all crafted or curated with care.</li></ul></p>
                    <p><ul><li>Support homemakers and explore
                        high-quality, unique finds at your fingertips.</li></ul></p>
                    <br />

                </div>

                <div className="tagline-carousel">
                    <Carousel
                        autoPlay
                        interval={3500}
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        showArrows={false}
                    >
                        <div>
                            <video src={assets.buying_video_1} controls autoPlay muted loop />
                        </div>
                        <div>
                            <img src={assets.buying_image_1} alt="Buying 1" />
                        </div>
                        <div>
                            <img src={assets.buying_image_2} alt="Buying 2" />
                        </div>
                        <div>
                            <img src={assets.buying_image_3} alt="Buying 3" />
                        </div>
                    </Carousel>
                </div>
            </section>


            {/* New Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <h3>Search Home Sellers Nearby</h3>
                    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={13}
                        >
                            {sellers.map((seller, index) => (
                                <MarkerF
                                    key={index}
                                    position={{ lat: seller.lat, lng: seller.lng }}
                                    title={seller.name}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </section>


            <section className="product-section">
                <h3>Featured Products</h3>
                <div className="product-container">
                    {/* Product Box 1 */}
                    <a href="/product/1" className="product-box">
                        <img src={assets.product_image_1} alt="Product 1" className="product-image" />
                        <h4 className="product-name">Product Name 1</h4>
                        <p className="product-description">This is a short description of Product 1.</p>
                        <div className="product-icons">
                            <button className="love-icon">❤️</button>
                            <button className="bag-icon">🛒</button>
                        </div>
                    </a>

                    {/* Product Box 2 */}
                    <a href="/product/2" className="product-box">
                        <img src={assets.product_image_2} alt="Product 2" className="product-image" />
                        <h4 className="product-name">Product Name 2</h4>
                        <p className="product-description">This is a short description of Product 2.</p>
                        <div className="product-icons">
                            <button className="love-icon">❤️</button>
                            <button className="bag-icon">🛒</button>
                        </div>
                    </a>

                    {/* Product Box 3 */}
                    <a href="/product/3" className="product-box">
                        <img src={assets.product_image_3} alt="Product 3" className="product-image" />
                        <h4 className="product-name">Product Name 3</h4>
                        <p className="product-description">This is a short description of Product 3.</p>
                        <div className="product-icons">
                            <button className="love-icon">❤️</button>
                            <button className="bag-icon">🛒</button>
                        </div>
                    </a>

                    {/* Product Box 4 */}
                    <a href="/product/4" className="product-box">
                        <img src={assets.product_image_4} alt="Product 4" className="product-image" />
                        <h4 className="product-name">Product Name 4</h4>
                        <p className="product-description">This is a short description of Product 4.</p>
                        <div className="product-icons">
                            <button className="love-icon">❤️</button>
                            <button className="bag-icon">🛒</button>
                        </div>
                    </a>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default Home;
