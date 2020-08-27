
import React, { useState } from 'react';
import Course from '../course/Course';
import Cart from '../cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const handleAddBtn = (price) => {
        const newCart = [...cart, price];
        setCart(newCart);
    }
    console.log(cart);
    return (
        <div className="row">
            <div className="col-md-10 course">
                <Course handleAddBtn={handleAddBtn}></Course>
            </div>
            <div className="col-md-2 cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;