import React from 'react';
import { Product } from './productAddtoCart';
import './shopAddtoCart.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'https://tienda-react.onrender.com/products/'; //aqui se hacen las peticiones

export const ShopAddtoCart = () => {

    const[products, setProducts] = useState([]) //aqui se guardan todos los productos
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
                <h1>MateoTech Shop</h1>
            </div>
            <div className="products"> 
                {products.map((product) => (
                    <Product data={product} /> //aqui por todo el arreglo de productos se imprimen los productos
                ))}
            </div>
        </div>
    )
};