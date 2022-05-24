import { useState, useEffect, React } from 'react';
import CarritoDeskTop from './CarritoDeskTop';
import CarritoMobile from './CarritoMobile';

const Carrito = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const maxWidth = 1350;

    useEffect(() => {
        const widthChange = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", widthChange);

        return () => {
            window.removeEventListener("resize", widthChange);
        };
    }, []);

    return (
        <div className='carrito'>
            {
                screenWidth < maxWidth ?
                    <CarritoMobile />
                    :
                    <CarritoDeskTop />
            }
        </div>
    )
}

export default Carrito