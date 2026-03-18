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
                          <img src={logoFooter} alt=""  className='logoFooter'/>
                  </div>


                  <div className="redesSociais">

                          <p className="paragrafoFooter">Follow us</p>

                          <ul className="itensRedesSociais">
                                        <li className='listaredesSociais'><a href="#"><img src={facebook} alt="" /></a></li>
                                        <li className='listaredesSociais'><a href="#"><img src={pinterest} alt="" /></a></li>
                                        <li className='listaredesSociais'><a href="#"><img src={zap} alt="" /></a></li>
                                        <li className='listaredesSociais'><a href="#"><img src={instagram} alt="" /></a></li>

                          </ul>

                  </div>


      </ul>

      <hr className='linhaSeparandoConteudoFooter' />


      <ul className="conteudoFooter">

                  <div className="aboutus">
                    <h4>About Us</h4>
                          <p className="paragrafoConteudoListaFooter">(456) 789-12301</p>

                  </div>

      </ul>



    </div>
  )
}

export default Footer