import React from 'react';
import '../css/footer.css'
import Follow from '../imgs/follow button.png'

var footer = () => {
  return (
    <footer >
      <div >
        <nav>
          <ul>
            <li><a href="//www.editorasanar.com.br/quem-somos"  className="footer-link">Quem Somos</a></li>
            <li><a href="//www.editorasanar.com.br/blog/" className="footer-link">Blog</a></li>
            <li><a href="//www.editorasanar.com.br/" className="footer-link">Produtos</a></li>
            <li><a href="//www.editorasanar.com.br/autores" className="footer-link">Nossos Autores</a></li>
            <li><a href="//www.editorasanar.com.br/faq" className="footer-link">Perguntas Frequentes</a></li>
            <li><a href="//www.editorasanar.com.br/termos-e-condicoes" className="footer-link">Termos e Condições</a></li>
            <li><a> <img src={Follow}  /> </a></li>
          </ul>

        </nav>
      </div>
    </footer>
  )
}

export default footer;