import React from 'react'
import "../Css/Footer.css"

import facebook from "../img/facebook.png"
import pinterest from "../img/pinterest.png"
import zap from "../img/zap.png"
import instagram from "../img/instagram.png"
import logoFooter from "../img/logoPadaria.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-overlay">
        <div className="listaLogoEredesSocias">
          <div className="itemimagemfooterLista">
            <img src={logoFooter} alt="Logo" className='logoFooter' />
          </div>

          <div className="redesSociais">
            <p className="paragrafoFooter">Follow us</p>
            <ul className="itensRedesSociais">
              <li className='listaredesSociais'><a href="#"><img src={facebook} alt="Facebook" /></a></li>
              <li className='listaredesSociais'><a href="#"><img src={pinterest} alt="Pinterest" /></a></li>
              <li className='listaredesSociais'><a href="#"><img src={zap} alt="WhatsApp" /></a></li>
              <li className='listaredesSociais'><a href="#"><img src={instagram} alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>

        <hr className='linhaSeparandoConteudoFooter' />

        <div className="conteudoFooter">
          <div className="footer-section aboutus">
            <h4>About Us</h4>
            <p className="paragrafoConteudoListaFooter">(456) 789-12301</p>
            <p className="paragrafoConteudoListaFooter">info@modrino.co.uk</p>
            <p className="paragrafoConteudoListaFooter">South 13th Street</p>
            <div className="paragrafoConteudoListaFooter">New York, America</div>
          </div>

          <div className="footer-section explore">
            <h4>Explore</h4>
            <div className="paragrafoConteudoListaFooter">Home</div>
            <div className="paragrafoConteudoListaFooter">Blog</div>
            <div className="paragrafoConteudoListaFooter">Contact Us</div>
            <div className="paragrafoConteudoListaFooter">Services</div>
          </div>

          <div className="footer-section opening-hours">
            <h4>Working Hours</h4>
            <div className="paragrafoConteudoListaFooter">Mon - Fri: 07:00 - 20:00</div>
            <div className="paragrafoConteudoListaFooter">Sat: 08:00 - 18:00</div>
            <div className="paragrafoConteudoListaFooter">Sun: Closed</div>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <p className="paragrafoConteudoListaFooter">Subscribe for fresh updates.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email..." className="newsletter-input" />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Modrino Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer