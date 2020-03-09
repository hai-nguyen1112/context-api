import React from "react"
import Cars from "./Cars"

const ProductList = ({cars, incrementCarPrice, decrementCarPrice}) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <Cars
                cars={cars}
                incrementCarPrice={incrementCarPrice}
                decrementCarPrice={decrementCarPrice}
            />
        </div>
    )
}

export default ProductList