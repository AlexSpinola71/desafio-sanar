import React from 'react';

import P1 from '../imgs/produto1.png'
import P2 from '../imgs/produto2.png'
import P3 from '../imgs/produto3.png'

var cards_cursos = () =>  {
  return (
    <div >
      <div className="ui centered link cards " >
        <div className="card ">
          <div className="image">
            <img  src={P1} />
          </div>
          <div className="content">
            <a className="header" href="//www.editorasanar.com.br/curso-online/preparatorio-intensivo-de-psicologia-para-marinha">Preparatório Intensivo de Psicologia para Marinha</a>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img  src={P2} />
          </div>
          <div className="content">
            <a className="header" href="//www.editorasanar.com.br/livro/1000-questoes-comentadas-de-provas-e-concursos-em-odontologia">1.000 Questões Comentadas de Provas e Concursos em Odontologia</a>
          </div>
        </div>
        <div className="card" >
          <div className="image">
            <img  src={P3} />
          </div>
          <div className="content">
            <a className="header" href="//www.editorasanar.com.br/livro/1000-questoes-comentadas-de-provas-e-concursos-em-nutricao">1.000 Questões Comentadas de Provas e Concursos em Nutrição (2ª Edição)</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default cards_cursos;