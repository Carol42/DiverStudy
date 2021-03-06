/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
// import Button from '../../components/Button';

function Login(

) {
  return (
    <PageDefault>
      <p>*Esta página está em construção, logo estará aberta para cadastro :)*</p>
      <h1>Login</h1>
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
      <Button as={Link} to="/login" className="ButtonSubmit" type="submit">
        Entrar
      </Button>

      <p>
        Não possui cadastro?
        <a href="/cadastro/user"> Crie uma conta</a>
      </p>
    </PageDefault>
  );
}

export default Login;
