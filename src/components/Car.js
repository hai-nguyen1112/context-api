import React from "react"

const Car = ({carID, name, price, incrementCarPrice, decrementCarPrice}) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <button onClick={() => incrementCarPrice(carID)}>&uarr;</button>
            <button onClick={() => decrementCarPrice(carID)}>&darr;</button>
        </>
    )
}

export default Car