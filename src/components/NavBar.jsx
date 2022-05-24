import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link className="logo" to="/">Fabrica de Empanadas</Link>
        </div>
    );
}

export default NavBar;