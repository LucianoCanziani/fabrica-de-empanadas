import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { ReactComponent as LoaderIcon } from '../../assets/loader.svg';
import { db } from "../Firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

        const productCollection = collection(db, "productos")
        const documentProduct = doc(productCollection, id)
        const docs = getDoc(documentProduct)
        docs
            .then(respuesta => {
                const product = {
                    id: respuesta.id,
                    ...respuesta.data()
                }
                setProducto(product)
            })
            .catch((error404) => {
                toast.error('Error al cargar el Producto')
            })
            .finally((fin) => {
                setLoading(false)
            })
    }, [id])
    
    return (
        <div>
            {
                loading ? <LoaderIcon className="loader" /> : <ItemDetail productos={producto} idd={id} />
            }
        </div>
    )
}

export default ItemDetailContainer;