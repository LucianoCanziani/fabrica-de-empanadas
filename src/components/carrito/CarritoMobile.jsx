import { useContext, useState, React } from 'react';
import { Link } from "react-router-dom";
import CarritoDeskTop from './CarritoDeskTop';
import { CartContext } from '../context/CartContext';

const CarritoMobile = () => {

    const { precioTotal, productoEnCarrito } = useContext(CartContext);

    const [seeCart, setSeeCart] = useState(false);

    const goToCart = (e) => {
        setSeeCart(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            {
                productoEnCarrito === true ?
                    <>
                        {seeCart === true ?
                            <CarritoDeskTop />
                            :
                            <div className='carrito-mobile-btn-container'>
                                <Link to="/carrito">
                                    <button className='carrito-mobile-btn' onClick={goToCart}>Ver mi pedido ${precioTotal}</button>
                                </Link>
                            </div>
                        }
                    </>
                    :
                    null
            }
        </>
    )
}

export default CarritoMobile