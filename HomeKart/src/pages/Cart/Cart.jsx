import React, { useState } from 'react';
import './Cart.css';
import Footer from '../../componenets/Footer/Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Modern Kitchen Cabinet', price: 799.99, quantity: 1, image: 'https://placehold.co/150x150' },
        { id: 2, name: 'Ergonomic Study Table', price: 299.99, quantity: 2, image: 'https://placehold.co/150x150' },
        { id: 3, name: 'Luxury Sofa Set (Demo)', price: 1299.99, quantity: 1, image: 'https://placehold.co/150x150' },
        { id: 4, name: 'Bedroom Wardrobe (Demo)', price: 899.99, quantity: 1, image: 'https://placehold.co/150x150' },
        { id: 5, name: 'Coffee Table (Demo)', price: 199.99, quantity: 1, image: 'https://placehold.co/150x150' }
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const updateQuantity = (id, change) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <>
            <div className="cart-container">
                <h1>Your Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <p>Add some items to your cart to get started!</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button 
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Subtotal:</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping:</span>
                                    <span>FREE</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="checkout-button">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
