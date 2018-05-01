import React from 'react';
//import '../css/header.css'
import '../css/header2.css'
import Sanar from '../imgs/sanar.png'
import Instagram from '../imgs/Sub Header.png'

var header = () => {
  return (
    <header >
      <div className="container">
        <a> <img src={Sanar} alt="Sanar Logo" className="logo" /> </a>
        <nav>
          <ul>
            <li><a href="#" >Home</a></li>
            <li><a href="#" >Teste</a></li>
            <li><a href="//www.instagram.com/editorasanar/"><img src={Instagram} alt="Logo Instagram" className="instagram" /> </a></li>
          </ul>

        </nav>

      </div>
    </header>
  )
}

export default header;