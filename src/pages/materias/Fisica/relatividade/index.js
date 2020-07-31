/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../../../../components/Menu';
import dadosIniciais from '../../../../data/dados_iniciais.json';
import Footer from '../../../../components/Footer';
import GroupVideos from '../../../../components/groupVideos';

function FisicaRelatividade() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <GroupVideos
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default FisicaRelatividade;
