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
             <li className="listaHeader"><a href="#">Contact Us</a></li>
             <li className="listaHeader"><a href="#">Services</a></li>
            </ul>


    </div>
  )
}

export default Header