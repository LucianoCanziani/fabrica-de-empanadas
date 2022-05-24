import { useContext, useState, useEffect, React } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { toast } from "react-toastify";
import volver from "../../assets/volver.png";

const CheckOut = () => {

    const { cart, precioTotal, cantidadProductos, clear } = useContext(CartContext)
    const [paso, setPaso] = useState(0);
    const [direccion, setDireccion] = useState([]);
    const [nombre, setNombre] = useState('');
    const [calle, setCalle] = useState('');
    const [numeroPuerta, setNumeroPuerta] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [detalleDomicilio, setDetalleDomicilio] = useState('');
    const [notaRest, setNotaRest] = useState('')
    const envio = 139;

    const agregarDireccion = e => {
        e.preventDefault();
        const direcciones = {
            nombre: nombre,
            calle: calle,
            numeroPuerta: numeroPuerta,
            telefono: telefono,
            detalleDomicilio: detalleDomicilio
        };
        setDireccion(direcciones);
if (screenWidth > maxWidth) {
    const stepOne = document.querySelector("#stepOne");
    const line = document.querySelector("#line");
    const step = document.querySelector("#stepTwo");
    stepOne.classList.remove("progress-step-active");
    stepOne.classList.add("progress-step-complete");
    line.classList.add("progress-step-line-complete");
    step.classList.add("progress-step-active");
}


        setPaso(paso + 1);
    }

    const confirmarPedido = () => {
        const pedidoVendido = {
            comprador: {
                direccion: direccion
            },
            producto: cart,
            cantidad: cantidadProductos,
            total: precioTotal + envio,
            observaciones: notaRest,
            fecha: serverTimestamp(),
        }
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, pedidoVendido);
        clear();
        toast.success("Tu pedido se ha enviado correctamente!");
    }

    const atras = () => {
        if (screenWidth > maxWidth) {
            const stepOne = document.querySelector("#stepOne");
            const line = document.querySelector("#line");
            const step = document.querySelector("#stepTwo");
            stepOne.classList.remove("progress-step-complete");
            stepOne.classList.add("progress-step-active");
            line.classList.remove("progress-step-line-complete");
            step.classList.remove("progress-step-active");
        }


        setPaso(paso - 1);
    }

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
        <div className='check-out'>
            <div className='pasos-check-out'>
                {
                    screenWidth < maxWidth ?
                        null
                        :
                        <div className='progress-steps'>
                            <div id='stepOne' className='progress-step progress-step-active'>
                                <span>Direccion de entrega</span>
                            </div>
                            <div id='line' className='progress-step-line'></div>
                            <div id='stepTwo' className='progress-step'>
                                <span>¡Ultimo paso!</span>
                            </div>
                        </div>
                }
                {
                    (paso === 0) ?
                        <>
                            {
                                screenWidth < maxWidth ?
                                <span className='direccion-entrega'>Direccion de entrega</span>
                                    :
                                   null
                            }
                            

                            <form onSubmit={e => agregarDireccion(e)} className='agregar-direccion'>
                                <span>Nombre*</span>
                                <input className='input-datos' type="text" onChange={event => setNombre(event.target.value)} required />
                                <span>Calle*</span>
                                <input className='input-datos' type="text" onChange={event => setCalle(event.target.value)} required />
                                <span>Numero de puerta*</span>
                                <input className='input-datos' type="text" onChange={event => setNumeroPuerta(event.target.value)} required />
                                <span>Telefono*</span>
                                <input className='input-datos' type="tel" onChange={event => setTelefono(event.target.value)} required />
                                <span>Detalle del domicilio</span>
                                <textarea className='input-datos' onChange={event => setDetalleDomicilio(event.target.value)} />
                                <button className='continuar-btn btn-direccion' type='submit'>Siguiente</button>
                            </form>
                        </>
                        : null
                }
                {
                    (paso === 1) ?
                        <div>
                            {
                                screenWidth < maxWidth ?
                                <span className='direccion-entrega'>¡Ultimo paso!</span>
                                    :
                                   null
                            }
                            <div className='bloque-confirmacion'>
                                <div className='titulo-confirmacion'>Direccion</div>
                                <div className='datos-confirmacion'>{calle} {numeroPuerta}</div>
                            </div>
                            <div className='bloque-confirmacion'>
                                <div className='titulo-confirmacion'>Metodo de pago</div>
                                <div className='datos-confirmacion'>Efectivo</div>
                            </div>
                            <div className='bloque-confirmacion'>
                                <div className='titulo-confirmacion'>Notas</div>
                                <textarea className='input-datos' placeholder='Para el restaurante' onChange={event => setNotaRest(event.target.value)} />
                            </div>
                            <div className='check-out-btns'>
                                <button className='paso-anterior-btn' onClick={atras}>
                                    <img alt='' className='volver-flecha' src={volver} width="15px" />
                                    <span>Paso anterior</span>
                                </button>
                                <Link className='link-continuar' to="/">
                                    <button onClick={confirmarPedido} className='continuar-btn check-out-btn'>Enviar pedido</button>
                                </Link>

                            </div>
                        </div>
                        : null
                }
            </div>
            <div className='vista-previa'>
                <div className="center-cont">
                    {
                        screenWidth < maxWidth ?
                            null

                            :
                            <span className="logo-vista-previa">Fabrica de Empanadas</span>
                    }

                    <span className='tiempo-vista-previa'>15 - 30 min • Sin minimo</span>
                </div>
                <div className='subTotal-envio-cont'>
                    <div className='precio-cont'>
                        <span>Subtotal</span>
                        <span>${precioTotal}</span>
                    </div>
                    <div className='precio-cont'>
                        <span>Envio</span>
                        <span>${envio}</span>
                    </div>
                </div>
                <div className='precio-cont'>
                    <span>Total</span>
                    <span>${precioTotal + envio}</span>
                </div>
            </div>
        </div>
    )
}

export default CheckOut