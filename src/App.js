import React, { useState } from "react";
import './App.css';
import ImageGallery from './components/ImageGallery';
import SlideShow from "./components/SlideShow";
import Navbar from "./components/Navbar";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [isFocusClicked, setIsFocusClicked] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const windowWidth = window.innerWidth;

  return (
    <div className="App">
      <div className="modal"
      style={{display: (overlayDisplay && windowWidth>810) ? 'flex' : 'none'}}>
        <SlideShow
        currentFocus={currentFocus}
        setCurrentFocus = {setCurrentFocus}
        isFocusClicked = {isFocusClicked}
        setIsFocusClicked = {setIsFocusClicked}
        showButtons = {true}
        overlayDisplay = {overlayDisplay}
        setOverlayDisplay = {setOverlayDisplay}
        />
      </div>
      <Navbar
      cart = {cart}
      setCart = {setCart}
      windowWidth = {windowWidth}
      isInCart = {isInCart}
      setIsInCart = {setIsInCart}
      />
      <div className="body"
      style = {{flexDirection: (windowWidth>810) ? 'row' : 'column',
      alignItems: (windowWidth>=720) ? '' : 'center',
      paddingTop: (windowWidth>810) ? '6%' : '2%',
      width: (windowWidth>400) ? '80%' : '100%'}}
      >
        <ImageGallery
        currentFocus={currentFocus}
        setCurrentFocus = {setCurrentFocus}
        overlayDisplay = {overlayDisplay}
        setOverlayDisplay = {setOverlayDisplay}
        isFocusClicked = {isFocusClicked}
        setIsFocusClicked = {setIsFocusClicked}
        windowWidth = {windowWidth}
        />
        <ProductInfo
        cart = {cart}
        setCart = {setCart}
        imgSrc = "product_shoe0Images/productImagesOnFocus/image-product-1.jpg"
        quantity = {quantity}
        setQuantity = {setQuantity}
        windowWidth = {windowWidth}
        isInCart = {isInCart}
        setIsInCart = {setIsInCart}
        />
      </div>      
    </div>
  );
}

export default App;
