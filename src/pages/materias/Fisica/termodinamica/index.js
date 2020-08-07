/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import dadosIniciais from '../../../../data/dados_iniciais.json';
import Footer from '../../../../components/Footer';
import GroupVideos from '../../../../components/groupVideos';
import Button from '../../../../components/Button';
import ScrollToTop from '../../../../components/ScrollTop';
import { SubTitle } from '../styles';

function Termodinamica() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <div className="videosWrapper">
        <>
          <SubTitle style={{ backgroundColor: 'purple' }}>
            {dadosIniciais.categorias[10].titulo}
          </SubTitle>
        </>
        <GroupVideos
          category={dadosIniciais.categorias[10]}
        />
        <div className="buttonWrapper">
          <Button as={Link} to="/fisica" className="Button">
            Voltar para Física
          </Button>
          <ScrollToTop />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Termodinamica;
