import React, { useState } from 'react';
import './Popup.css';
import { useDispatch } from 'react-redux';
import { actionCart } from '../../store/cart-slice';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    carts: {
        totalAmount: number;
        items: { name: string; price: number; quantity: number }[];
    };
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, carts }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handlerBuy = async (event: React.FormEvent) => {


        const orderData = {
            name,
            email,
            cart: carts,
        };

        try {
            const response = await fetch("http://localhost:3001/purchase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error("Failed to send order data");
            }

            const data = await response.json();
            console.log("Success:", data);
            dispatch(actionCart.clear());
            onClose(); // Close the popup after submitting
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Order Summary</h2>
                <p>Total Amount: ${carts.totalAmount}</p>
                <ul>
                    {carts.items.map((item, index) => (
                        <li key={index}>
                            <p>{item.name} - ${item.price} x {item.quantity}</p>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handlerBuy}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
