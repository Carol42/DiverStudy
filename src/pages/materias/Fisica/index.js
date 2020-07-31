/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Menu from '../../../components/Menu';
import Button from '../../../components/Button';
// import Footer from '../../../components/Footer';
import './fisica.css';
import { Link } from 'react-router-dom';

function Fisica() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <div className="Container">
        <h1>Física</h1>
        <Button as={Link} to="/fisica/relatividade" className="Button">
          Relatividade
        </Button>
        <Button
          as={Link}
          className="Button"
          to="/fisica/"
        />
        <Button
          as={Link}
          className="Button"
          to="/fisica/"
        />
      </div>

    </div>
  );
}

export default Fisica;
