/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import Footer from '../Footer';
import GroupVideos from '../groupVideos';
import Button from '../Button';
import ScrollToTop from '../ScrollTop';
import { SubTitle } from './styles';

const PaginasEspecificas = (props) => {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <div className="videosWrapper">
        <>
          <SubTitle style={{ backgroundColor: 'purple' }}>
            {dadosIniciais.categorias[props.posicao].titulo}
          </SubTitle>
        </>
        <GroupVideos
          category={dadosIniciais.categorias[props.posicao]}
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
};

PaginasEspecificas.propTypes = {
  posicao: PropTypes.number,
};

export default PaginasEspecificas;
