import React, { useState } from 'react';
import './Favourite.css';
import { assets } from '../../assets/assets';
import Footer from '../../componenets/Footer/Footer';

const Favourite = () => {
    const [favouriteItems, setFavouriteItems] = useState([
        { 
            id: 1, 
            name: 'Modern Sofa (Demo)', 
            price: 999.99, 
            image: 'https://placehold.co/300x200',
            description: 'Comfortable modern sofa with premium fabric and elegant design'
        },
        { 
            id: 2, 
            name: 'Dining Table Set (Demo)', 
            price: 599.99, 
            image: 'https://placehold.co/300x200',
            description: 'Elegant 6-seater dining table set with premium finish'
        },
        { 
            id: 3, 
            name: 'Luxury Bed (Demo)', 
            price: 1299.99, 
            image: 'https://placehold.co/300x200',
            description: 'King size bed with premium mattress and headboard'
        },
        { 
            id: 4, 
            name: 'Study Desk (Demo)', 
            price: 299.99, 
            image: 'https://placehold.co/300x200',
            description: 'Ergonomic study desk with built-in storage'
        },
        { 
            id: 5, 
            name: 'Bookshelf (Demo)', 
            price: 199.99, 
            image: 'https://placehold.co/300x200',
            description: 'Modern bookshelf with adjustable shelves'
        }
    ]);

    const handleRemoveFromFavourites = (itemId) => {
        setFavouriteItems(prevItems => 
            prevItems.filter(item => item.id !== itemId)
        );
    };

    return (
        <>
            <div className="favourites-container">
                <h1>My Favourites</h1>
                {favouriteItems.length === 0 ? (
                    <div className="empty-favourites">
                        <h2>No favourites added yet!</h2>
                        <p>Browse our products and add some items to your favourites.</p>
                        <button className="browse-products">Browse Products</button>
                    </div>
                ) : (
                    <div className="favourites-grid">
                        {favouriteItems.map(item => (
                            <div key={item.id} className="favourite-item">
                                <div className="image-container">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-description">{item.description}</p>
                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                    <div className="button-group">
                                        <button 
                                            className="remove-favourite"
                                            onClick={() => handleRemoveFromFavourites(item.id)}
                                        >
                                            Remove
                                        </button>
                                        <button className="add-to-cart">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Favourite;
