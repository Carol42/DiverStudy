/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../../../components/Menu';
import Button from '../../../components/Button';
// import Footer from '../../../components/Footer';
// import '../fisica.css';
import { Link } from 'react-router-dom';
import dadosIniciais from '../../../data/dados_iniciais.json';

function Biologia() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <div className="Container">
        <h1>Biologia</h1>
        <Button
          as={Link}
          to="/biologia/evolucao"
          className="Button"
        >
          {dadosIniciais.categorias[22].titulo}
        </Button>
        <Button
          as={Link}
          to="/biologia/biodiversidade"
          className="Button"
        >
          {dadosIniciais.categorias[23].titulo}
        </Button>
      </div>
    </div>
  );
}

export default Biologia;
