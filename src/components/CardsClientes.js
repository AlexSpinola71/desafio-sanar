import React from 'react';
import '../css/rating.css'
import Stars from './stars'
import A1 from '../imgs/avatar1.png'
import A2 from '../imgs/avatar2.png'
import A3 from '../imgs/avatar3.png'

var CardsClientes = () => {
  return (
    <div className="ui centered link cards">
      <div className="card">
        <div className="image">
          <img  src={A1}  />
        </div>
        <div className="content">
          <div className="header">Matheus Guimarães</div>
          <div className="meta">
            <a>Psicólogo</a>
          </div>
          <div className="description">
            Comprou o Preparatório Intensivo de Psicologia para Marinha
          </div>
        </div>
        <div className="extra">
          Nota:
          <Stars/>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img  src={A2}  />
        </div>
        <div className="content">
          <div className="header">Manuela Garcia</div>
          <div className="meta">
            <a>Estudante de Odontologia</a>
          </div>
          <div className="description">
           Comprou o livro: 1.000 Questões Comentadas de Provas e Concursos em Odontologia
          </div>
        </div>
        <div className="extra">
          Nota:
          <Stars/>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img  src={A3}  />
        </div>
        <div className="content">
          <div className="header">Maria Clara</div>
          <div className="meta">
            <a>Nutricionista</a>
          </div>
          <div className="description">
            Comprou o livro: 1.000 Questões Comentadas de Provas e Concursos em Nutrição (2ª Edição)
          </div>
        </div>
        <div className="extra">
          Nota:
          <Stars/>
        </div>
      </div>

    </div>
  )
}

export default CardsClientes;