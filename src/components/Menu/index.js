/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import Button from '../Button';
// import Livros from '../../assets/img/book.png';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo" />
      </Link>
      {/* <p className="ButtonLink" id="menuItem1">
        Categorias
      </p> */}
      <p as={Link} className="ButtonLink" id="menuItem2">
        <a href="/contribuir" id="contribuir">Quero contribuir</a>
      </p>
      <p as={Link} className="ButtonLink" id="menuItem3">
        <a href="/cadastro/user" id="login">Login/Cadastro</a>
      </p>
    </nav>
  );
}

export default Menu;
