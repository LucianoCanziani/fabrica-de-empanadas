import { useState, useEffect, React } from "react";
import { toast } from "react-toastify";

const Footer = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(Footer);
      }, 3000)
    })
    promesa
      .catch((rej) => {
        toast.error("No se pudo cargar el Footer");
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <>
      {
        loading ? null :
          <div className='footer'>
            <span>Fabrica de Empanadas - Creado por Luciano Canziani</span>
          </div>
      }
    </>
  )
}

export default Footer