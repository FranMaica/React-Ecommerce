import React from 'react';

const CartWidget = () => {
    return (
        <div className="position-relative">
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
        </div>
    );
}

export default CartWidget;
