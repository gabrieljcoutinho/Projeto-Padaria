import React from 'react'
import "../Css/Header.css"

import logoHeader from "../img/logoPadaria.png"


const Header = () => {
  return (
    <div className='header'>

          <img src={logoHeader} alt="" />

            <ul className="headerLista">
             <li className="listaHeader"></li>
            </ul>


    </div>
  )
}

export default Header