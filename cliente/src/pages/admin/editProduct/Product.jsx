import React from "react";
import { useState } from "react";
import axios from 'axios';

const URI = 'https://tienda-react.onrender.com/products/';//aqui se hacen las peticiones 

export const Product = (props) => {
    const { id, productName, price, img1, img2, img3, stockMax, stockMin } = props.data; //aqui se guardan los datos de los productso
    const [priceHook, setPrice] = useState(''); //hook para el precio del producto
    const [maxStock, setMaxS] = useState(''); //hook para el stock maximo
    const [minStock, setMinS] = useState(''); //hook para el stock minimo
    

    const update = async (e) => {//funcion para actualizar un producto a partir del id 
        e.preventDefault();
        await axios.put(URI+id+'/', { price: priceHook, stockMax: maxStock, stockMin: minStock });
    }

    return (
        <div className="product">
            <div className="slide-var">
                <ul>
                    <li><img src={img1} alt={productName}/></li> {/*carrousel de las imagenes */}
                    <li><img src={img2} alt={productName}/></li>
                    <li><img src={img3} alt={productName}/></li>
                </ul>
            </div>
            <div className="description"> 
                <p> 
                    <b>{productName}</b>  {/*se muestra toda la informacion de los productos */}
                </p>
                <p> ${price}</p>
                <p> Max Stock: {stockMax}</p>
                <p> Min Stock: {stockMin}</p>
                <form onSubmit={update} action="/auth" method="post"> {/*al momento de enviar el formulario se llama a la funcion update para actualizar el producto */}
                    <input 
                    onChange={ (e) => setPrice(e.target.value)} /* se guarda el valor ingresado del input dentro de price */
                    type="text" name="pass" id="pass" placeholder="New Prize"/>
                    <input 
                    onChange={ (e) => setMaxS(e.target.value)}/*se ingresa el valor ingresado del input dentro de maxstock */
                    type="text" name="pass" id="pass" placeholder="New MaxStock"/>
                    <input 
                    onChange={ (e) => setMinS(e.target.value)}/*se ingresa el valor ingresado del input dentro de setMins*/
                    type="text" name="pass" id="pass" placeholder="New MinStock"/>
                    <input type="submit" className="btn-login" value="Edit" /> {/*boton para mandar el formulario */}
                </form>
            </div>
        </div> 
    );
};