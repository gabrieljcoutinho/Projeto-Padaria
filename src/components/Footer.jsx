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


                  <div className="redesSociais">

                          <p className="paragrafoFooter">Follow us</p>

                          <ul className="itensRedesSociais">
                                        <li><a href="http://"></a></li>
                                        <li><a href="http://"></a></li>
                                        <li><a href="http://"></a></li>
                                        <li><a href="http://"></a></li>

                          </ul>

                  </div>


      </ul>



    </div>
  )
}

export default Footer