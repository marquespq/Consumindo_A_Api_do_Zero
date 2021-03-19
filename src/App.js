import React, { Component } from 'react';
import api from './api';
import "./app.css";
//import api from './api';

class App extends Component {

  state = {
    artigos: [],
  }
  async componentDidMount() {
    const response = await api.get('http://localhost:8080');

    this.setState({ artigos: response.data })
  }
  render() {
  
    const { artigos } = this.state;
    console.log(artigos);
    return ( 
      <div className="geral">  
        <h1 className="font-geral">
          
          Sala de Troféus do Sport Club Internacional
        </h1>
        <ul className="fundo-api">
          
          {artigos.map(artigo => (
            <p key={artigo._id}>
              <hr></hr>
              <div className="caixaNome">
                <h2 className="titulo">
                Título: {artigo.titulo}
              </h2>
              </div>
              <p className="conteudo">
                <strong>Descrição do Título: {artigo.conteudo}</strong>
              </p>
              <div className="imagens">
                <img className="img" src={artigo.imagem} />
                <img className="gif" src={artigo.gif}/>
               
              </div>
              <strong>
                <p className="ano">
                Ano de conquista: {artigo.ano}
              </p>
              </strong>
            </p>
          ))}
        </ul>
      </div>

    );
  };
};


export default App;
