import React from 'react';
import '../css/Body.css'
import '../css/semantic.css'
import Selly from '../imgs/Selly.png'
import Down from '../imgs/down.png'
import CardsCursos from './CardsCursos'
import Form from './Form'
import CardsClientes from './CardsClientes'

var body = () => {
  return (
    <div className="test">
      <div class="pimg1">
        <div class="ptext">
          <img src={Selly} />
          <br />
          <span class="border trans">
            Texto
          </span>
          <br />
          <div className="ui blue big buttons" style={{paddingTop: '50px'}}>
              <button className="ui button">Ir para loja</button>
          </div>

          <br />
          <a><img src={Down}  style={{paddingTop: '100px'}}/></a>
        </div>
      </div>

      <section class="section section-light">
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae, deserunt dolorem doloribus eaque eligendi enim eveniet ex excepturi exercitationem labore minus non, obcaecati praesentium quia quibusdam, recusandae rem soluta tempora vero. Debitis distinctio magnam nobis pariatur quas ratione suscipit voluptate! Culpa dicta, dolore, fugiat, laborum laudantium molestiae molestias numquam perferendis possimus praesentium qui sapiente tempore! Ad amet asperiores at aut blanditiis dolores hic ipsum iusto labore minus molestiae perferendis quam quas recusandae soluta vitae, voluptatibus. Dolores, quia, ratione. Adipisci consequuntur doloribus exercitationem illum inventore itaque minima natus similique ullam voluptatibus. Assumenda aut beatae dignissimos enim error magni optio placeat.
        </p>

      </section>

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>

      <section className="section section-light ">
        <h2>Catálogo</h2>
        <CardsCursos />

      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>


      <section className="section section-dark">
      <Form />

      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>
      <section className="section section-light ">
        <h2>Nossos Clientes</h2>
        <CardsClientes/>
      </section>


      <div className="pimg1">
        <div className="ptext">
          <span className="border trans">
          </span>
        </div>
      </div>

    </div>
  )
}

export default body;