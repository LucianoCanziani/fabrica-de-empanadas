import Item from './Item';

const ItemList = (props) => {

    return (

        <section className="productos-lista">
            {props.items.map((producto) => 
                <Item key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} img={producto.img} ingredientes={producto.ingredientes} />
            )}
        </section>  
       
    )
}

export default ItemList;