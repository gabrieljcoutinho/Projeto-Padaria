import React from "react";
import "../Css/produtos.css";

import produt1 from "../img/product1.png";
import produt2 from "../img/product2.png";
import produt3 from "../img/product3.png";
import produt4 from "../img/product4.png";
import produt5 from "../img/product5.png";
import produt6 from "../img/product6.png";

const Produtos = () => {
  return (
    <div className="produtosVendas">

      <h2 className="tituloProdutos">Top Products</h2>

      <div className="flexbox">

        <div className="cardProduto">
          <img src={produt1} alt="produto 1" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

        <div className="cardProduto">
          <img src={produt2} alt="produto 2" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

        <div className="cardProduto">
          <img src={produt3} alt="produto 3" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

        <div className="cardProduto">
          <img src={produt4} alt="produto 4" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

        <div className="cardProduto">
          <img src={produt5} alt="produto 5" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

        <div className="cardProduto">
          <img src={produt6} alt="produto 6" className="imgProduct"/>
          <p className="precoProdutos"></p>
        </div>

      </div>

    </div>
  );
};

export default Produtos;