import React from 'react'
import "../Css/Footer.css"

import logoFooter from "../img/logoPadaria.png"

const Footer = () => {
  return (
    <div className='footer'>

      <ul className="listaLogoEredesSocias">

                  <div className="itemimagemfooterLista">
                          <img src={logoFooter} alt="" />
                  </div>


      </ul>



    </div>
  )
}

export default Footer