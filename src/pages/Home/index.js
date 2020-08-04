/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Divirta-se e aprofunde seus conhecimentos com a nossa seleção de vídeos de diversos criadores de conteúdos com o compromisso de trazer informação de forma confiável e acessível. Professor? Compartilhe seus próprios conteúdos!"
      />
      {/* <a className="icons">
        <i className="fas fa-atom" />
      </a> */}
      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Home;
