import React from 'react';
import { Product } from './Product';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'https://tienda-react.onrender.com/products/'; //aqui se hacen las peticiones

export const EditProduct = () => {

    const[products, setProducts] = useState([])// aqui se guardan los productos
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => { //aqui se hace la solicitud
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Edit Products</h1>
            </div>
            <div className="products"> 
                {products.map((product) => (
                    <Product data={product} /> // se muestran todos los productos que estan en el arreglo
                ))}
            </div>
        </div>
    )
};