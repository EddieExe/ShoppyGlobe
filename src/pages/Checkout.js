import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = ({ cart = [], setCart }) => { 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        paymentMethod: "COD",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOrder = () => {
        if (!formData.name || !formData.email || !formData.address) {
            alert("Please Enter Your Details Before Placing Order!");
            return;
        }

        alert(`Order placed successfully!\nPayment: ${formData.paymentMethod}`);

        // Clear the cart after ordering
        setCart([]);

        // Redirect user to homepage after 1 second
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    // Calculate total price
    const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    const deliveryCharge = subtotal > 500 ? 0 : 50;
    const grandTotal = subtotal + deliveryCharge;

    return (
        <div className="checkout-container">
            <div className="checkout-form">
                <h2>Delivery Information</h2>
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required></textarea>

                <h2>Payment Method</h2>
                <div className="payment-methods">
                    <label>
                        <input type="radio" name="paymentMethod" value="COD" checked={formData.paymentMethod === "COD"} onChange={handleChange} />
                        Cash on Delivery (COD)
                    </label>
                    <label>
                        <input type="radio" name="paymentMethod" value="UPI" checked={formData.paymentMethod === "UPI"} onChange={handleChange} />
                        UPI (Google Pay, PhonePe, Paytm)
                    </label>
                    <label>
                        <input type="radio" name="paymentMethod" value="Card" checked={formData.paymentMethod === "Card"} onChange={handleChange} />
                        Debit / Credit Card
                    </label>
                    <label>
                        <input type="radio" name="paymentMethod" value="NetBanking" checked={formData.paymentMethod === "NetBanking"} onChange={handleChange} />
                        Net Banking
                    </label>
                </div>

                <button 
                    className="confirm-order" 
                    onClick={handleOrder}
                >
                    Confirm Order
                </button>
            </div>

            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="order-items">
                    {cart.map((item) => (
                        <div key={item.id} className="order-item">
                            <img src={item.thumbnail} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>${item.price} x {item.quantity}</p>
                            </div>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className="total-price">
                    <p>Subtotal:</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="delivery-charges">
                    <p>Delivery Charges:</p>
                    <p>{deliveryCharge === 0 ? "Free" : `$${deliveryCharge}`}</p> {/* Fixed syntax */}
                </div>
                <div className="total-price grand-total">
                    <p>Grand Total:</p>
                    <p>${grandTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;