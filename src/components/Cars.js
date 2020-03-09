import React from "react"
import Car from "./Car"
import CarsContext from "../contextAPI/CarsContext"

const Cars = () => {
    return (
        <CarsContext.Consumer>
            {context => (
                <>
                    <h4>Cars</h4>
                    {Object.keys(context.cars).map(carID => (
                        <Car
                            key={carID}
                            carID={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementCarPrice={context.incrementCarPrice}
                            decrementCarPrice={context.decrementCarPrice}
                        />
                    ))
                    }
                    <Car
                    />
                </>
            )}
        </CarsContext.Consumer>
    )
}

export default Cars