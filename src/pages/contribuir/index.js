/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import './index.css';
import Button from '../../components/Button';

function Contribuir() {
  return (
    <PageDefault>
      <div id="sugestoes">
        <p>*Esta págna está em construção, em breve estará aberta para seus comentários :)*</p>
        <h1 className="titulo">Sugestões</h1>
        <p>
          Utilize esse espaço para mandar suas sugestões de conteúdos que podemos adicionar à plataforma. Informe o link do vídeo e a categoria a qual ele pertence e nós o adicionaremos o mais breve possível!
        </p>
        <p>
          Aproveite e deixe seus comentários, sugestões e reclamações sobre sua experiência por aqui! Juntos podemos criar uma comunidade de estudos linda e feliz!
        </p>
        <FormField
          label="Comentários felizes"
          type="textarea"
          name="descricao"
          value={[]}
        />

        <p>
          É professor e gostaria de adicionar seu próprio conteúdo? Crie a sua conta ou faça login na nossa plataforma para adicionar uma seção só sua!
        </p>
        <Button as={Link} to="/cadastro/user" className="ButtonSubmit" type="submit">
          Cadastre-se
        </Button>
      </div>

    </PageDefault>
  );
}

export default Contribuir;
