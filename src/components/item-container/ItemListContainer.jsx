import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../Firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {

    const [producto, setProductos] = useState([]);

    const { categoriaEmpanada } = useParams();

    useEffect(() => {

        const empanadas = collection(db, "productos");
        const documentos = getDocs(empanadas);

        documentos
            .then((res) => {

                const aux = [];

                res.forEach((documento) => {
                    const empanada = {
                        id: documento.id,
                        ...documento.data()
                    }
                    aux.push(empanada);
                })

                let productosFiltrados;

                switch (categoriaEmpanada) {
                    case "vegetarianas":
                        productosFiltrados = aux.filter(categoria => categoria.vegetariano === "vegetarianas");
                        setProductos(productosFiltrados);
                        break;
                    case "bizarras":
                        productosFiltrados = aux.filter(categoria => categoria.bizarro === "bizarras");
                        setProductos(productosFiltrados);
                        break;
                    case "clasicas":
                        productosFiltrados = aux.filter(categoria => categoria.clasico === "clasicas");
                        setProductos(productosFiltrados);
                        break;
                    default:
                        setProductos(aux);
                        break;
                }
            })
            .catch(() => {
                toast.error("ERROR");
            })
    }, [categoriaEmpanada])

    return (
        <>
            <ItemList items={producto} />
        </>
    )
}

export default ItemListContainer;