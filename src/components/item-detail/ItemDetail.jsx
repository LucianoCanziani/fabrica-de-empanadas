import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState, useContext } from 'react';
import ItemCounter from "./ItemCount";
import { CartContext } from "../context/CartContext";
import cerrar from "../../assets/cerrar.png";

const ItemDetail = ({ productos, idd }) => {

    const { nombre, precio, stock, ingredientes, imgDetail } = productos;

    const [unidadesCompradas, setUnidadesCompradas] = useState(0);

    const { addItem } = useContext(CartContext);

    const onAdd = (unidadesCompradas) => {
        if (unidadesCompradas !== undefined) {
            setUnidadesCompradas(unidadesCompradas);
            addItem(productos, unidadesCompradas, idd);

            toast.success("Has agregado " + unidadesCompradas + " " + nombre + " al carrito", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
            });
        } else {
            toast.error("Acurrio un problema")
        }
    }

    return (
        <div className="item-detail-container" >
            <div className="producto-detalles">
                <div>
                    <div className="img-detail-container">
                        <Link to="/" className="link-ajuste3">
                            <img src={cerrar} alt="" className="cerrar" />
                        </Link>
                        <img src={imgDetail} alt="" className="foto-item-detail" />
                    </div>
                    <div className="info-producto">
                        <div className="info-nombre-ingredientes">
                            <h3>{nombre}</h3>
                            <p>{ingredientes}</p>
                        </div>
                        <span>${precio}</span>
                    </div>
                </div>
            </div>
            {unidadesCompradas ? null : <ItemCounter inicial={1} stock={stock} onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail