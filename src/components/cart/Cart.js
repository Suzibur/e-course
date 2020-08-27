import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    cart.forEach(element => {
        total+=parseFloat(element);
    });
    let totalSpent = total.toFixed(2);
    return (
        <div className='cart'>
            <p>Ordered: <span>{cart.length}</span></p>
            <p>Spends: <span>${totalSpent}</span></p>
        </div>
    );
};
export default Cart;