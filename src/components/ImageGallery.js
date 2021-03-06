import React, { useEffect } from "react";
import SlideShow from "./SlideShow";

function ImageGallery ({currentFocus, 
                        setCurrentFocus, 
                        overlayDisplay, 
                        setOverlayDisplay, 
                        isFocusClicked, 
                        setIsFocusClicked,
                        windowWidth}) {  
    console.log('windowWidth: ' + windowWidth);
    useEffect(() => {
        /*isModal is true when modal is open */
        if (isFocusClicked & !overlayDisplay) {
            setOverlayDisplay(() => {
                return !overlayDisplay;
            });
            setIsFocusClicked(!isFocusClicked);
        }
    }, [isFocusClicked]);

    return (
        <div className = 'gallery'>
            <SlideShow
            currentFocus = {currentFocus}
            setCurrentFocus = {setCurrentFocus}
            isFocusClicked = {isFocusClicked}
            setIsFocusClicked = {setIsFocusClicked}
            showButtons = {false}
            windowWidth = {windowWidth}
            />
            <div className="overlay" 
            style={{display: (overlayDisplay && windowWidth>810) ? 'block' : 'none',
                    height: window.document.body.offsetHeight,
                    width: window.document.body.offsetWidth}}
            ></div>
        </div>
    )
}

export default ImageGallery;