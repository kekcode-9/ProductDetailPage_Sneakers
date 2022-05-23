function SlideShow ({currentFocus, 
                    setCurrentFocus, 
                    isFocusClicked, 
                    setIsFocusClicked, 
                    showButtons,
                    overlayDisplay,
                    setOverlayDisplay,
                    windowWidth
                    }) {

    const images = [
        {
            focus: "product_shoe0Images/productImagesOnFocus/image-product-1.jpg",
            thumbnail: "product_shoe0Images/ProductImagesThumbnail/image-product-1-thumbnail.jpg"
        },
        {
            focus: "product_shoe0Images/productImagesOnFocus/image-product-2.jpg",
            thumbnail: "product_shoe0Images/ProductImagesThumbnail/image-product-2-thumbnail.jpg"
        },
        {
            focus: "product_shoe0Images/productImagesOnFocus/image-product-3.jpg",
            thumbnail: "product_shoe0Images/ProductImagesThumbnail/image-product-3-thumbnail.jpg"
        },
        {
            focus: "product_shoe0Images/productImagesOnFocus/image-product-4.jpg",
            thumbnail: "product_shoe0Images/ProductImagesThumbnail/image-product-4-thumbnail.jpg"
        }
    ];

    function focusCalculator(focusIndex) {
        console.log('button clicked');
        if (focusIndex < 0) {
            setCurrentFocus(4 + focusIndex);
        } else if (focusIndex > 3) {
            setCurrentFocus(4 - focusIndex);
        } else {
            setCurrentFocus(focusIndex);
        }
    }

    return (
        <div className = 'slider'>
            <div className = 'focus'>
                <button type='button' 
                className='slide-image'
                id='prevButton'
                style={{display: (showButtons || (windowWidth<720)) ? 'block' : 'none',
                        position: (windowWidth<720) ? 'absolute' : /*'fixed'*/ 'absolute'}}
                onClick = {() => {focusCalculator(currentFocus - 1)}}
                >
                    <img src = "productDetailPageIcons/icon-previous.svg" 
                    style = {{marginRight: '7%', 
                            marginTop: '5%', 
                            marginBottom: '5%'}} 
                    />
                </button>

                <button type='button'
                className='close-modal'
                style={{display: (showButtons && overlayDisplay) ? 'block' : 'none', 
                        position: 'absolute', 
                        top: '-8%', 
                        right: '0%'}}
                onClick = {() => {setOverlayDisplay(!overlayDisplay)}}
                >
                    <img src = "productDetailPageIcons/icon-close.svg"/>
                </button>

                <img 
                className="focus-image"
                src = {images[currentFocus].focus} 
                onClick={() => {if(!overlayDisplay) setIsFocusClicked(true)}}
                />

                <button type='button'
                className='slide-image'
                id='nextButton'
                style={{display: (showButtons || (windowWidth<720)) ? 'block' : 'none', 
                        right: '0%',
                        position: (windowWidth<720) ? 'absolute' : /*'fixed'*/ 'absolute'}}
                onClick = {() => {focusCalculator(currentFocus + 1)}}
                >
                    <img src = "productDetailPageIcons/icon-next.svg" style = {{marginLeft: '7%', marginTop: '5%', marginBottom: '5%'}} />
                </button>
            </div>

            {/*<button type='button'
            className='close-modal'
            style={{display: (showButtons && overlayDisplay) ? 'block' : 'none', 
                    position: 'absolute', 
                    top: '10%', 
                    right: '0%'}}
            onClick = {() => {setOverlayDisplay(!overlayDisplay)}}
            >
                <img src = "productDetailPageIcons/icon-close.svg"/>
            </button>*/}

            <div className = 'thumbnails'>
                <div className="outerFrame"
                style = {{borderStyle: currentFocus==0 ? 'solid' : 'none', 
                        borderColor: 'orangeRed', 
                        borderWidth: '2px', 
                        borderRadius: '10px'}}
                >
                    <img src = {images[0].thumbnail} onClick = {() => {setCurrentFocus(0)}}/>
                    <div className="selection-on"
                    style = {{display: currentFocus==0 ? 'block' : 'none'}}></div>
                </div>
                <div className="outerFrame"
                style = {{borderStyle: currentFocus==1 ? 'solid' : 'none', 
                        borderColor: 'orangeRed', 
                        borderWidth: '2px', 
                        borderRadius: '10px'}}>
                    <img src = {images[1].thumbnail} onClick = {() => {setCurrentFocus(1)}}/>
                    <div className="selection-on"
                    style = {{display: currentFocus==1 ? 'block' : 'none'}}></div>
                </div>
                <div className="outerFrame"
                style = {{borderStyle: currentFocus==2 ? 'solid' : 'none', 
                        borderColor: 'orangeRed', 
                        borderWidth: '2px', 
                        borderRadius: '10px'}}>
                    <img src = {images[2].thumbnail} onClick = {() => {setCurrentFocus(2)}}/>
                    <div className="selection-on"
                    style = {{display: currentFocus==2 ? 'block' : 'none'}}></div>
                </div>
                <div className="outerFrame"
                style = {{borderStyle: currentFocus==3 ? 'solid' : 'none', 
                        borderColor: 'orangeRed', 
                        borderWidth: '2px', 
                        borderRadius: '10px'}}>
                    <img src = {images[3].thumbnail} onClick = {() => {setCurrentFocus(3)}}/>
                    <div className="selection-on"
                    style = {{display: currentFocus==3 ? 'block' : 'none'}}></div>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;