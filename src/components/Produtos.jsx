import React from 'react'
import "../Css/produtos.css"

import produt1 from "../img/product1.png"
import produt2 from "../img/product2.png"
import produt3 from "../img/product3.png"
import produt4 from "../img/product4.png"
import produt5 from "../img/product5.png"
import produt6 from "../img/product6.png"

const Produtos = () => {
  return (
    <div className='produtosVendas'>

      <h2 className="tituloProdutos">Top Products</h2>


      <div class="flexbox">

<div class="div1">

      <img src={produt1} alt="" className='imgProduct'/>

</div>

<div class="div1">
</div>

<div class="div1">
</div>

</div>


<div class="flexbox">

<div class="div1">
</div>

<div class="div1">
</div>

<div class="div1">
</div>

</div>

    </div>
  )
}

export default Produtos