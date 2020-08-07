/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FisicaRelatividade from './pages/materias/Fisica/relatividade';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Fisica from './pages/materias/Fisica';
import Contribuir from './pages/contribuir';
import Login from './pages/login';
import CadastroUser from './pages/cadastroUser';
import FisicaQuantica from './pages/materias/Fisica/quantica';
import Eletromagnetismo from './pages/materias/Fisica/eletromagnetismo';
import Ondulatoria from './pages/materias/Fisica/ondulatoria';
import Optica from './pages/materias/Fisica/optica';
import Termodinamica from './pages/materias/Fisica/termodinamica';
import Hidrostatica from './pages/materias/Fisica/hidrostatica';
import LeisDeNewton from './pages/materias/Fisica/leis-de-newton';
import Movimento from './pages/materias/Fisica/movimento';

// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:
const Pagina404 = () => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', height: '100%',
  }}>
    <h1 style={{ margin: 0, color: '#880088', fontSize: '2.2em' }}>Ops, quebrou tudo :O</h1>

    <p style={{ color: '#880088', fontSize: '1.2em' }}>
      Você pode jogar ou
      {' '}
      <a href="/">voltar pra home</a>
      {' '}
      :)
      PS: Jogo desenvolvido por
      {' '}
      <a href="https://github.com/Carol42">Caroline H Oliveira</a>
      {' '}
      durante a
      {' '}
      <a href="https://www.alura.com.br/imersao-gamedev-javascript/">Imersão GameDev</a>
    </p>

    <iframe
      title="Em busca do Robô Perdido"
      src="https://editor.p5js.org/Carol42/embed/qYJRo0QUe"
      width="750"
      height="450" />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/contribuir" component={Contribuir} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro/user" component={CadastroUser} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route path="/fisica" component={Fisica} exact />
      <Route path="/fisica/fisica-quantica" component={FisicaQuantica} />
      <Route path="/fisica/eletromagnetismo" component={Eletromagnetismo} />
      <Route path="/fisica/relatividade" component={FisicaRelatividade} />
      <Route path="/fisica/ondulatoria" component={Ondulatoria} />
      <Route path="/fisica/optica" component={Optica} />
      <Route path="/fisica/termodinamica" component={Termodinamica} />
      <Route path="/fisica/hidrostatica" component={Hidrostatica} />
      <Route path="/fisica/leis-de-newton" component={LeisDeNewton} />
      <Route path="/fisica/movimento" component={Movimento} />

      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
