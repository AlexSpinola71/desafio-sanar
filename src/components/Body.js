import React from 'react';
import '../css/Body.css'
import '../css/semantic.css'
import Selly from '../imgs/Selly.png'
import Down from '../imgs/down.png'
import CardsCursos from './CardsCursos'
import Form from './Form'
import CardsClientes from './CardsClientes'
import AnchorLink from 'react-anchor-link-smooth-scroll'

var body = () => {
  return (
    <div className="test">
      <div class="pimg1">
        <div class="ptext">
          <img src={Selly} style={{display: 'block', margin: 'auto', marginBottom: '20px'}} />
          <span className="subtitulo">
            <strong>Excelência</strong> em materiais didáticos
          </span>
          <div className="ui blue big buttons" style={{paddingTop: '50px', display:'block'}}>
            <a href="//www.editorasanar.com.br/"><button className="ui button">Ir para loja</button></a>
          </div>
          <AnchorLink href="#quem-somos"><img src={Down}  style={{paddingTop: '100px'}}/></AnchorLink>
        </div>
      </div>

      <section class="section section-light">
        <h2 id="quem-somos" className="sans-bold-dark">Quem somos</h2>
        <p className="sans-light-dark">Somos uma editora comprometida em ajudar o estudante da área de Saúde a atingir todos os seus objetivos profissionais e acadêmicos. Dentro desta perspectiva, seguimos a filosofia editorial de conceber um livro para cada um desses objetivos
          Para tanto, formamos um time composto por mais de 100 professores das principais Universidades do país que assinam a autoria das nossas obras.
          Acreditamos que apenas com materiais didáticos customizados, fruto da dedicação de autores e editores com sólida formação acadêmica, conseguiremos atender aos propósitos dos nossos leitores.
          Além disso, primamos por um canal fluido de comunicação com os nossos clientes, e por agilidade na entrega dos nossos produtos. Customização do produto e relacionamento com cliente, ao nosso ver, compõe a essência do que a Editora Sanar pode oferecer de melhor aos nossos leitores no cumprimento dos seus objetivos! Boas leituras!</p>
        <AnchorLink href="#catalogo"><img src={Down}  style={{paddingTop: '20px'}}/></AnchorLink>

      </section>

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>

      <section className="section section-light ">
        <h2 id="catalogo" className="sans-bold-dark">Catálogo</h2>
        <CardsCursos />
        <AnchorLink href="#newsletter"><img src={Down}  style={{paddingTop: '50px'}}/></AnchorLink>

      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>


      <section className="section section-dark">
        <h2 id="newsletter" className="sans-light">Assine a nossa Newsletter para saber de todas as novidades </h2>
        <Form/>
        <AnchorLink href="#nossos-clientes"><img src={Down}  style={{paddingTop: '30px'}}/></AnchorLink>

      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>
      <section className="section section-light ">
        <h2 id="nossos-clientes" className="sans-bold-dark">Nossos Clientes</h2>
        <CardsClientes/>
        <AnchorLink href="#rodape"><img src={Down}  style={{paddingTop: '30px'}}/></AnchorLink>
      </section>


      <div className="pimg1">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>
      <span id="rodape"></span>
    </div>
  )
}

export default body;