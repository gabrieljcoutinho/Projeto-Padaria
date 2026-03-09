import React from 'react'
import "../Css/Header.css"

import logoHeader from "../img/logoPadaria.png"


const Header = () => {
  return (
    <div className='header'>

          <img src={logoHeader} alt=""className='imgHeader' />

            <ul className="headerLista">
             <li className="listaHeader"><a href="#" className='linkHeader'>Home</a></li>
             <li className="listaHeader"><a href="#" className='linkHeader'>Blog</a></li>
             <li className="listaHeader"><a href="#" className='linkHeader'>Contact Us</a></li>
             <li className="listaHeader"><a href="#" className='linkHeader'>Services</a></li>
            </ul>

            <di className="conteudoHeader">

                <p className="paragrafoHeader">Delicius Cafe</p>

                <h1 className='tituloprincipal'>Sweet Treats, <br />
                  Perfect Eats</h1>

                  <br /><br />

                  <button className='btnheader'>Shoop now</button>

            </di>


    </div>
  )
}

export default Header