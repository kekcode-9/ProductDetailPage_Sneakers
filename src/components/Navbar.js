import React, { useState, useEffect } from "react";

function Navbar ({cart, 
                setCart, 
                windowWidth,
                isInCart,
                setIsInCart}) {
    const [cartOpen, setCartOpen] = useState(false);
    const [burgerOpen, toggleBurgerOpen] = useState(false);
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [cartClicked, setCartClicked] = useState(false);

    function toggleBurger () {
        /*burgerOpen decides the display (flex or none) of the burger-menu
        burgerClicked decides it's position on screen while display is flex */
        console.log('burger toggling');
        if (burgerOpen) {
            setBurgerClicked(!burgerClicked);
            setTimeout(() => {toggleBurgerOpen(!burgerOpen)},
            1000);
        } else {
            toggleBurgerOpen(!burgerOpen);
            setBurgerClicked(!burgerClicked);
        }
    }

    function showCart () {
        console.log('cart clicked');
        if (cartOpen) {
            setCartClicked(!cartClicked);
            setTimeout(() => {setCartOpen(!cartOpen)},
            1000);
        } else {
            setCartOpen(!cartOpen);
            setCartClicked(!cartClicked);
        }
    }

    function removeItem (itemId) {
        setIsInCart(false);
        setCart(() => {
            return cart.filter((item, index) => {
                if (item.id != itemId) {
                    return item;
                }
            })
        })
    }

    return (
        <div className="navbar"
        >
            <div className="burger-menu"
            style={{height: window.document.body.offsetHeight,
                    display: (windowWidth<=850 && burgerOpen) ? 'flex' : 'none',
                    animation: (burgerClicked) ? 'slide-in-burger-menu 0.5s ease-in forwards' : 'slide-out-burger-menu 0.5s ease-in forwards'}}>
                <div className="burger-close-icon"
                onClick={() => {toggleBurger()}}>
                    <img src="productDetailPageIcons/icon-close.svg"></img>
                </div>
                <div className="burger-link">
                    <a href="#">Collections</a>
                </div>
                <div className="burger-link">
                    <a href="#">Men</a>
                </div>
                <div className="burger-link">
                    <a href="#">Women</a>
                </div>
                <div className="burger-link">
                    <a href="#">About</a>
                </div>
                <div className="burger-link">
                    <a href="#">Contact</a>
                </div>
            </div>

            <div className="burger"
            onClick={() => {toggleBurger()}}>
                <img src="productDetailPageIcons/icon-menu.svg" 
                id="burger"></img>
            </div>

            <div className="logo">
                <a href="/">
                    <img src="productDetailPageIcons/logo.svg" id="logo"></img>
                </a>
            </div>

            <div className="nav-links">
                <div className="link">
                    <a href="#">Collections</a>
                </div>
                <div className="link">
                    <a href="#">Men</a>
                </div>
                <div className="link">
                    <a href="#">Women</a>
                </div>
                <div className="link">
                    <a href="#">About</a>
                </div>
                <div className="link">
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="user">
                <div className="cart-div">
                    <div className="cart-size"
                    style={{display: (cart.length > 0) ? 'block' : 'none'}}>
                        {cart.length}
                    </div>

                    <img src="productDetailPageIcons/icon-cart.svg" id="cart" 
                    onClick={() => {showCart()}}></img>

                    <div className="cart-content"
                    style={{display: cartOpen ? 'flex' : 'none',
                            animation: (cartClicked) ? 'cart-fade-in 0.5s cubic-bezier(.67,.28,.18,1) forwards' : 'cart-fade-out 0.5s cubic-bezier(.67,.28,.18,1) forwards'}}
                    >
                        <div id="cart-header">
                            <div id="cart-header-wrapper">
                                Cart
                            </div>
                        </div>

                        <div id="items">
                            {(cart.length > 0) ?
                                cart.map((item) => (
                                    <li className="cart-items"
                                    key={item.id}
                                    >
                                        <div className="item-img">
                                            <img src={item.image}/>
                                        </div>
                                        <div className="item-info">
                                            <div className="item-name">
                                                {item.productName}
                                            </div>
                                            <div className="item-price">
                                                <div className="price">
                                                    ${item.price} x {item.quantity}
                                                </div>
                                                <div className="total-price">
                                                    ${item.total}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="delete-item">
                                            <img src="productDetailPageIcons/icon-delete.svg"
                                            style={{cursor: 'pointer'}}
                                            onClick={() => {removeItem(item.id)}}/>
                                        </div>
                                    </li>
                                ))
                            :
                                (<div className="empty-cart-message">
                                    Your cart is empty.
                                </div>)
                            }
                        </div>

                        <div className="checkout" style={{display: (cart.length > 0) ? 'flex' : 'none'}}>
                            {<div className="checkout-wrapper">
                                Checkout
                            </div>}
                        </div>
                    </div>
                </div>
                
                <img src="productDetailPageIcons/image-avatar.png" id="avatar"></img>
            </div>
        </div>
    )
}

export default Navbar;