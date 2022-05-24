import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCounter = ({ stock, inicial, onAdd }) => {

    const [precio, setPrecio] = useState(170)
    let precioAux = 170;
    let precioAuxiliar = 0;

    const [contador, setContador] = useState(inicial);

    const sumaContador = (e) => {
        setContador(Math.min(stock, contador + 1));

        precioAuxiliar = precioAux;
        precioAuxiliar += (precioAux * contador);
        setPrecio(precioAuxiliar);
    }

    const restaContador = (e) => {
        setContador(Math.max(inicial, contador - 1));

        setPrecio(Math.max(precioAux, precio - precioAux))
    }

    const enviarCarrito = (e) => {
        onAdd(contador);
    }

    return (
        <div>
            <div className='contador'>
                <p>Unidades</p>
                <div className='contador-btns'>
                    <button className="btn-contador" onClick={restaContador}>-</button>
                    <span className="contador-cantidad">{contador}</span>
                    <button className="btn-contador" onClick={sumaContador}>+</button>
                </div>
            </div>
            <Link to="/">
                <button className="btn-agregar-carrito" onClick={enviarCarrito}>
                    <div className="datos-btn-container">
                        <span className="cantidad-btn">{contador}</span>
                        Agregar al carrito
                        <span>${precio}</span>
                    </div>

                </button>
            </Link>
        </div>
    )
}

export default ItemCounter;