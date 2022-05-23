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
        <div className="product-info">
            <div className="seller">
                SNEAKER COMPANY
            </div>
            <div className="product-name"
            >
                {productName}
            </div>
            <div className="product-description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </div>
            <div className="price-info">
                <div id="price">${price}</div>
                <div id="discount">50%</div>
                <div id="original-price">$250.00</div>
            </div>
            <div className="buying-option">
                <div className="quantity-selector">
                    <div id="minus" onClick = {() => { quantityUpdate(-1) }}>-</div>
                    <div id="quantity">{quantity}</div>
                    <div id="plus" onClick = {() => { quantityUpdate(1) }}>+</div>
                </div>
                <div className="add-to-cart" 
                onClick={() => {addToCart(productName, price, quantity, imgSrc)}}
                >
                    {(!isInCart) ? 'Add to cart' : 'Go to cart'}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;