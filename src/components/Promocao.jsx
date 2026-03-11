import React from 'react'
import "../Css/Promocao.css"
import fundopromocao from "../img/fundoPromocao.png"

const Promocao = () => {
  return (
    <div className='promocao'>

        <h2>20% Off  Your First Order</h2>

        <img src={fundopromocao} alt="" />

    </div>
  )
}

export default Promocao