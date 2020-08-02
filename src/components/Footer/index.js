/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <p>
        &#169;2020 Criado por
        {' '}
        <a href="https://github.com/Carol42">Caroline H Oliveira</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
