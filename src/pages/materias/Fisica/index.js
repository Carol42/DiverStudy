/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../../../components/Menu';
import Button from '../../../components/Button';
// import Footer from '../../../components/Footer';
import './fisica.css';
import { Link } from 'react-router-dom';
import dadosIniciais from '../../../data/dados_iniciais.json';

function Fisica() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <div className="Container">
        <h1>Física</h1>
        <Button
          as={Link}
          to="/fisica/relatividade"
          className="Button"
        >
          {dadosIniciais.categorias[5].titulo}
        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/fisica-quantica"
        >
          {dadosIniciais.categorias[6].titulo}
        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/eletromagnetismo"
        >
          {dadosIniciais.categorias[7].titulo}
        </Button>

        <Button
          as={Link}
          className="Button"
          to="/fisica/ondulatoria"
        >
          {dadosIniciais.categorias[8].titulo}
        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/optica"
        >
          {dadosIniciais.categorias[9].titulo}
        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/termodinamica"
        >
          {dadosIniciais.categorias[10].titulo}
        </Button>

        <Button
          as={Link}
          className="Button"
          to="/fisica/hidrostatica"
        >
          {dadosIniciais.categorias[11].titulo}
        </Button>

        <Button
          as={Link}
          className="Button"
          to="/fisica/leis-de-newton"
        >
          {dadosIniciais.categorias[12].titulo}

        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/movimento"
        >
          {dadosIniciais.categorias[13].titulo}

        </Button>

      </div>

    </div>
  );
}

export default Fisica;
