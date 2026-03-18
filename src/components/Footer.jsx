import React from 'react'
import "../Css/Footer.css"

import facebook from "../img/facebook.png"
import pinterest from "../img/pinterest.png"
import zap from "../img/zap.png"
import instagram from "../img/instagram.png"

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
                                        <li><a href="http://"><img src={} alt="" /></a></li>
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