import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import axios from 'axios'
const ProductoList = () => {
    const [productos,setProductos] = useState([
        {"id":"1", "nombre":"Bebida Cola", "precio":"1200", "imagen": "1.jpg"},
        {"id":"2", "nombre":"Bebida Fanta", "precio":"2100", "imagen": "2.jpg"},
        {"id":"3", "nombre":"Jugo Naranja", "precio":"2200", "imagen": "3.jpg"},
        {"id":"4", "nombre":"Pack Lata", "precio":"3420", "imagen": "4.jpg"},
    ])
    useEffect(()=>{
          axios.get('https://g9cd7530b8a8613-db20220601151235.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/')
          .then(data => setProductos(data.data.items))
        },[]
        )
    const modificaProducto = () => {
        console.log(productos)
    }
    return(
        <div key="11">
        {productos.map((producto)=>{
            return(<Producto data={producto} key={producto.key} unbotonClick={modificaProducto} />)
            
        })}
        </div>
    )
}

export default ProductoList;