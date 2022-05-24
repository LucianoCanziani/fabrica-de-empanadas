import ItemListContainer from './item-container/ItemListContainer';
import CategoriasColumna from './CategoriasColumna';
import Carrito from './carrito/Carrito';
import { toast } from "react-toastify";
import { ReactComponent as LoaderIcon } from '../assets/loader.svg';
import { useState, useEffect, React } from "react";

const ContenedorMain = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(ContenedorMain);
            }, 1500)
        })
        promesa
            .catch((rej) => {
                toast.error("No se pudo cargar los datos");
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            {
                loading ?
                    <LoaderIcon className="loader" /> 
                    :
                    <div className="contenedor-main">
                        <CategoriasColumna />
                        <ItemListContainer />
                        <Carrito />
                    </div>
            }
        </>
    )
}

export default ContenedorMain;