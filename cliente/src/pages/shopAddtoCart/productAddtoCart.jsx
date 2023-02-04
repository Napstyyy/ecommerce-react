import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, description, img1, img2, img3 } = props.data; //se guardan las informaciones de la base de datos
    const { addToCart, cartItems} = useContext(ShopContext); //se usa el context para agregar al carrito 

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <div className="slide-var"> {/*se hace el carusel */}
                <ul>
                    <li><img src={img1} alt={productName}/></li>
                    <li><img src={img2} alt={productName}/></li>
                    <li><img src={img3} alt={productName}/></li>
                </ul>
            </div>
            <div className="descripcion">
                <p>{description}</p>
            </div>
            <div className="description"> 
                <p> 
                    <b>{productName}</b> 
                </p>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> {/*se agrega un producto por su id */}
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>} {/*se imprime el numero de la cantidad */}
            </button>
        </div> 
    );
};