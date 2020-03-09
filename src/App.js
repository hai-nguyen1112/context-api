import React from 'react'
import './App.css'
import ProductList from "./components/ProductList"
import CarsProvider from "./contextAPI/CarsProvider"

function App() {
    return (
        <CarsProvider>
            <div className="App">
                <header>
                    <h1 className="App-title">Welcome to my web store</h1>
                </header>
                <ProductList />
            </div>
        </CarsProvider>
    )
}

export default App
