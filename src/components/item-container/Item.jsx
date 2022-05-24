import { Link } from "react-router-dom";

const Item = (props) => {

  return (
    <article className="producto">
      <Link to={`/item/${props.id}`} className="link-ajuste">
        <div className="nombre-precio">
          <div>
            <span className="nombre">{props.nombre}</span>
            <p className="ingredientes">{props.ingredientes}</p>
          </div>

          <span className="precio">${props.precio}</span>
        </div>
        <img alt="" className="imagen-empanada-inicial" src={props.img} />
      </Link>
    </article>
  )
};

export default Item
