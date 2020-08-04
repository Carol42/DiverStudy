/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
// import Button from '../../components/Button';

function CadastroUser(

) {
  return (
    <PageDefault>
      <p>*Esta página está em construção, logo estará aberta para cadastro :)*</p>
      <h1>Cadastro</h1>
      <FormField
        label="Nome"
        type="text"
        name="nome"
        value={[]}

      />
      <FormField
        label="Disciplina"
        type="text"
        name="nome"
        value={[]}
      />
      <FormField
        label="E-mail"
        type="text"
        name="nome"
        value={[]}
      />
      <FormField
        label="Senha"
        type="text"
        name="nome"
        value={[]}
      />
      <FormField
        label="Confirme a senha"
        type="text"
        name="nome"
        value={[]}
      />
      <p as={Link} className="ButtonLink">
        <a href="/login" id="login">Cadastrar</a>
      </p>
      <p>
        Já possui cadastro?
        <a href="/login">Faça Login</a>
      </p>
    </PageDefault>
  );
}

export default CadastroUser;
