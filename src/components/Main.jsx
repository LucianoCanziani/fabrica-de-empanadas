import ItemDetailContainer from './item-detail/ItemDetailContainer';
import CheckOut from './carrito/CheckOut';
import CarritoDeskTop from './carrito/CarritoDeskTop';
import { Routes, Route } from "react-router-dom";
import ContenedorMain from './ContenedorMain';

const Main = () => {

    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<ContenedorMain />} />
                <Route path='/categoria/:categoriaEmpanada' element={<ContenedorMain />} />
                <Route path='/carrito' element={<CarritoDeskTop />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/checkout' element={<CheckOut />} />
            </Routes>
        </div>
    )
}

export default Main;