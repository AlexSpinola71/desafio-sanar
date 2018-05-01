import React from 'react';
import '../css/header.css'
import Sanar from '../imgs/sanar.png'
import Instagram from '../imgs/Sub Header.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

var header = () => {
  return (
    <header >
      <div className="container">
        <a> <img src={Sanar} alt="Logo Sanar" className="logo" /> </a>
        <nav>
          <ul>
          <li><AnchorLink href="#quem-somos" >Quem somos</AnchorLink></li>
            <li><AnchorLink href="#catalogo" >Catálogo</AnchorLink></li>
            <li><a href="//www.instagram.com/editorasanar/"><img src={Instagram} alt="Logo Instagram" className="instagram" /> </a></li>
          </ul>

        </nav>

      </div>
    </header>
  )
}

export default header;