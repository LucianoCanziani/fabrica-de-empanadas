import { useContext, React } from 'react';
import { ReactComponent as CarritoVacio } from '../../assets/lupa.svg';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import remove from "../../assets/remove.png";
import cerrar from "../../assets/cerrar.png";

const CarritoDeskTop = () => {

  const { clear, removeItem, cart, precioTotal } = useContext(CartContext);

  return (
    <div className='carrito-desktop'>
      {cart.length > 0 ?
        <>
          <div className='clear-btn-parent'>
            <Link to="/" className="link-ajuste3-mobile" hidden>
              <img src={cerrar} alt="" className="cerrar" />
            </Link>
            <span className='llevando-carrito'>Estás llevando:</span>
            <button className='clear-btn' onClick={clear}>Vaciar el carrito</button>
          </div>
          <span className='llevando-carrito-mobile'>Estás llevando:</span>
          <ul className='productos-carrito-lista'>
            {cart.map((item, index) =>
              <li className='producto-carrito' key={index} id="cart">
                <div className='producto-datos-carrito'>
                  <img className='imagen-empanada-carrito' src={item.producto.img} alt="" />
                  <div className='producto-info-carrito'>
                    <p className='cantidad-nombre'>X{item.cantidad} {item.producto.nombre}</p>
                    <p className='precio-carrito'>${item.producto.precio * item.cantidad}</p>
                  </div>
                </div>
                <div className='remove-contador-btns'>
                  <button className='remove-btn' onClick={() => removeItem(item.producto)}>
                    <img alt='' src={remove} width="15px" />
                  </button>
                </div>
              </li>
            )}
          </ul>
          <div className='precio-total'>
            <span>Subtotal</span>
            <span>${precioTotal}</span>
          </div>
          <Link to="/checkout" className='link-ajuste'>
            <button className='continuar-btn'>Continuar</button>
          </Link>
        </>
        :
        <div className='carrito-vacio'>
          <Link to="/" className="link-ajuste3-mobile" hidden>
            <img src={cerrar} alt="" className="cerrar" />
          </Link>
          <CarritoVacio width={"100px"} height={"100px"} />
          <span>Tu carrito esta vacio :(</span>
        </div>
      }
    </div>
  )
}

export default CarritoDeskTop