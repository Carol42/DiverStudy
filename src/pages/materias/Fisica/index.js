import React from 'react';
import Menu from '../../../components/Menu'
import Button from '../../../components/Button'
//import Footer from '../../../components/Footer';
import './fisica.css'
import { Link } from 'react-router-dom';


function Fisica() {
  return (
    <div  style={{ background: "#141414" }}>
      <Menu />
      <div className="Container">
      <h1>Física</h1>
        <button as={Link} className="Button" to="/fisica/relatividade">
          Relatividade
        </button>
        <Button as={Link} className="Button" to="/fisica/"
        >
        </Button>
        <Button as={Link} className="Button" to="/fisica/"
        >
        </Button>
        </div>
     
    </div>
  );
}

export default Fisica;