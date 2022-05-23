function ProductInfo ({cart, 
                        setCart, 
                        imgSrc, 
                        quantity, 
                        setQuantity,
                        windowWidth,
                        isInCart,
                        setIsInCart}) {
    var productName = 'Fall Limited Edition Sneakers';
    var price = 125.00;

    function quantityUpdate (num) {
        if (quantity + num >= 0) {
            setQuantity(quantity + num);
        }
    }

    function addToCart (name, price, quantity, imgSrc) {
        if (quantity > 0) {
            var newItem = {
                'id': Math.random() * 1000,
                'productName': name,
                'image': imgSrc,
                'price': price,
                'quantity': quantity,
                'total': price * quantity
            }
            setIsInCart (true);
            setCart(() => {
                return [...cart, newItem]; //all items in cart are as is and then you append newItem
            });
        }
    }

    return (
        <div className="product-info"
        style={{width: (windowWidth>810) ? 'min(50%, 600px)' : ((windowWidth>=720) ? '80%' : '100%'),
                marginLeft: (windowWidth>810) ? '8%' : ((windowWidth>=720) ? '0%' : '3%'),
                marginTop: (windowWidth<=810 && windowWidth>720) ? '10%' : '5%',
                height: (windowWidth>=720) ? '60%' : '100%'
                }}
        >
            <div className="seller">
                SNEAKER COMPANY
            </div>
            <div className="product-name"
            >
                {productName}
            </div>
            <div className="product-description"
            style={{textAlign: (windowWidth>=1070) ? 'justify' : 'left'}}
            >
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </div>
            <div className="price-info">
                <div id="price">${price}</div>
                <div id="discount">50%</div>
                <div id="original-price">$250.00</div>
            </div>
            <div className="buying-option" 
            style={{flexDirection: (windowWidth>=960) ? 'row' : 'column'}}
            >
                <div className="quantity-selector"
                style={{height: (windowWidth>=960) ? '100%' : '33%',
                        width: (windowWidth>=960) ? '30%': '100%'}}
                >
                    <div id="minus" onClick = {() => { quantityUpdate(-1) }}>-</div>
                    <div id="quantity">{quantity}</div>
                    <div id="plus" onClick = {() => { quantityUpdate(1) }}>+</div>
                </div>
                <div className="add-to-cart" 
                style={{height: (windowWidth>=960) ? '100%' : '33%',
                width: (windowWidth>=960) ? '60%': '100%'}}
                onClick={() => {addToCart(productName, price, quantity, imgSrc)}}
                >
                    {(!isInCart) ? 'Add to cart' : 'Go to cart'}
                    {/*<div className="add-to-cart-wrapper">
                        
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;