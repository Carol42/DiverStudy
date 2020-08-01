/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import dadosIniciais from '../../../../data/dados_iniciais.json';
import Footer from '../../../../components/Footer';
import GroupVideos from '../../../../components/groupVideos';
import Button from '../../../../components/Button';
import ScrollToTop from '../../../../components/ScrollTop';

function FisicaRelatividade() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <GroupVideos
        category={dadosIniciais.categorias[5]}
      />
      <div className="buttonWrapper">
        <Button as={Link} to="/fisica" className="Button">
          Voltar para Física
        </Button>
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}

export default FisicaRelatividade;
