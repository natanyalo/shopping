import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Cart.css';
import { actionCart } from '../../store/cart-slice';
import Popup from '../../components/popup/popup';

const Cart: React.FC = () => {
    const carts = useSelector((state: RootState) => state.carts);
    const dispatch = useDispatch();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleBuyClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-header">Cart Page</h1>
            <p>Cart items: {carts.totalAmount}</p>
            <ul className="cart-items">
                {carts.items.map((item, index) => (
                    <li key={index} className="cart-item">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => dispatch(actionCart.remove(item))}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="checkout-button" onClick={handleBuyClick}>Buy</button>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} carts={carts} />
        </div>
    );
};

export default Cart;
