import { NavLink } from "react-router-dom";
import arrow from "../assets/arrow.png";
import {React, useState,useEffect} from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const CategoriasColumna = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const maxWidth = 1350;

  useEffect(() => {
    const widthChange = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", widthChange);

    return () => {
      window.removeEventListener("resize", widthChange);
    };
  }, []);

  const abrirCategorias = (e) => {
  if (screenWidth > maxWidth) {
      const categoriaLista = document.querySelector('#nav');
      const arrow = document.querySelector('.arrow');
      if (categoriaLista.classList.contains('display')) {
        arrow.setAttribute('style', 'transform:none; transition: 0.3s;');
        categoriaLista.classList.remove("display");
      } else {
        categoriaLista.classList.add("display");
        arrow.setAttribute('style', 'transform:rotate(180deg); transition: 0.3s;');
      }
    }
  }

  return (
    <div className="categorias-container">
      <div className='categorias'>
        <span onClick={abrirCategorias} className='titulo-categorias'>Categorias
          <img src={arrow} className="arrow" id="arrow" height="15px" />
        </span>
        <ul id="nav" className="categorias-lista display">
          <ScrollContainer className="container">
            <li className="categoria-item">
              <NavLink className="categoria-link " activeclassname="active" to="/" >Todas</NavLink>
            </li>
            <li className="categoria-item">
              <NavLink className="categoria-link" activeclassname="active" to={"/categoria/clasicas"} >Clasicos</NavLink>
            </li>
            <li className="categoria-item">
              <NavLink className="categoria-link" activeclassname="active" to={"/categoria/vegetarianas"} >Vegetarianas</NavLink>
            </li>
            <li className="categoria-item">
              <NavLink className="categoria-link" activeclassname="active" to={"/categoria/bizarras"} >Bizarras</NavLink>
            </li>
          </ScrollContainer>
        </ul>
      </div>
    </div>
  )
}

export default CategoriasColumna