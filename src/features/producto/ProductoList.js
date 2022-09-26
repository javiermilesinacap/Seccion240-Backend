import React from "react";
import Producto from "./Producto";

const ProductoList = () => {
    const productos = [
        {"id":"1", "nombre":"Bebida Cola", "precio":"1200", "imagen": "1.jpg"},
        {"id":"2", "nombre":"Bebida Fanta", "precio":"2100", "imagen": "2.jpg"},
        {"id":"3", "nombre":"Jugo Naranja", "precio":"2200", "imagen": "3.jpg"},
        {"id":"4", "nombre":"Pack Lata", "precio":"3420", "imagen": "4.jpg"},
    ]
    return(
        <div>
        {productos.map((producto)=>{
            return(<Producto data={producto} key={producto.id} />)
            
        })}
        </div>
    )
}

export default ProductoList;