/**
 * @Author: Your name
 * @Date:   2023-11-10 19:59:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-11 13:40:14
 */
import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, nombre, precio, img}) => {

    return (
        <div className="product">
            <h2>{nombre}</h2>
            <img src={`${process.env.PUBLIC_URL}/${img}`} alt={nombre}/>
            <p>Precio: {precio} USD</p>
            <Link to={`/productos/${id}`} className="details">Ver detalle</Link>
        </div>
    )
}

export default Item
