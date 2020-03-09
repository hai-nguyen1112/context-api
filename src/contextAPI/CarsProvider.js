import React, {useState, useCallback} from 'react'
import CarsContext from "./CarsContext"

const CarsProvider = ({children}) => {
    const [cars, setCars] = useState({
        car001: {name: 'Honda', price: 100},
        car002: {name: 'BMW', price: 150},
        car003: {name: 'Mercedes', price: 200}
    })

    const incrementCarPrice = useCallback(selectedID => {
        const newCars = Object.assign({}, cars)
        newCars[selectedID].price = newCars[selectedID].price + 1
        setCars(newCars)
    }, [cars])

    const decrementCarPrice = useCallback(selectedID => {
        const newCars = Object.assign({}, cars)
        newCars[selectedID].price = newCars[selectedID].price - 1
        setCars(newCars)
    }, [cars])

    return (
        <CarsContext.Provider
            value={{
                cars: cars,
                incrementCarPrice: incrementCarPrice,
                decrementCarPrice: decrementCarPrice
            }}
        >
            {children}
        </CarsContext.Provider>
    )
}

export default CarsProvider



