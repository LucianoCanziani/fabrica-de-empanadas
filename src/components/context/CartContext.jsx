import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const [productoEnCarrito, setProductoEnCarrito] = useState(false)

    const [precioTotal, setPrecioTotal] = useState(0);

    const [cantidadProductos, setCantidadProductos] = useState(0);

    const addItem = (producto, cantidad, idd) => {

        let cartProduct = { producto, cantidad, idd };
        let carritoAuxiliar = [];

        if (isInCart(idd)) {
            cartProduct = cart.find((item) => item.idd === idd)
            cartProduct.cantidad += cantidad
            carritoAuxiliar = [...cart]
        } else {
            carritoAuxiliar = [cartProduct, ...cart]
        }
        setCart(carritoAuxiliar)

        let cantidadAuxiliar = 0;

        cantidadAuxiliar = cantidadProductos;
        cantidadAuxiliar += cantidad;
        setCantidadProductos(cantidadAuxiliar);

        let precioAuxiliar = 0;

        precioAuxiliar = precioTotal;
        precioAuxiliar += (producto.precio * cantidad);
        setPrecioTotal(precioAuxiliar);
        setProductoEnCarrito(true)
    }
    const removeItem = (producto, cantidad) => {

        let productosRemove = 0, precioRemove = 0;
        const carritoAuxiliar = cart.filter(item => item.producto !== producto)

        setCart(carritoAuxiliar)
        if (cart) {
            carritoAuxiliar.forEach((item) => {
                precioRemove += (item.producto.precio * item.cantidad);
                setPrecioTotal(precioRemove);

                productosRemove += item.cantidad;
                setCantidadProductos(productosRemove);
            });
            setCart(carritoAuxiliar)
            setProductoEnCarrito(false)
        } 
    }

    const clear = () => {
        setCantidadProductos(0);
        setPrecioTotal(0)
        setCart([]);
        setProductoEnCarrito(false)
    }

    const isInCart = (idd) => {
        return cart && cart.some(item => item.idd === idd)
    }

    return (
        <CartContext.Provider
            value={{
                addItem, removeItem, clear, cart, precioTotal, cantidadProductos, productoEnCarrito
            }}>
            {children}
        </CartContext.Provider>
    )
}
