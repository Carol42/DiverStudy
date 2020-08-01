/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import Button from '../Button';
import Livros from '../../assets/img/book.png';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo" />
      </Link>
      <p className="ButtonLink" id="menuItem1">
        Categorias
      </p>
      <img className="book" src={Livros} alt="livros" />
      <p as={Link} className="ButtonLink" id="menuItem2">
        <a href="/cadastro/video" id="newVideo">Novo vídeo</a>
      </p>
    </nav>
  );
}

export default Menu;
