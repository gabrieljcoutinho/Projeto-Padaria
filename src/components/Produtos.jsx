import React from "react";
import "../Css/produtos.css";

import produt1 from "../img/product1.png";
import produt2 from "../img/product2.png";
import produt3 from "../img/product3.png";
import produt4 from "../img/product4.png";
import produt5 from "../img/product5.png";
import produt6 from "../img/product6.png";

const Produtos = () => {

  const listaProdutos = [
    {
      id: 1,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt1,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt2,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt3,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt4,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt5,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 6,
      nome: "Whole Grain Bread",
      preco: "$40",
      img: produt6,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ];

  return (
    <div className="produtosVendas">
      <h2 className="tituloProdutos">Top Products</h2>

      <div className="flexbox">
        {listaProdutos.map((produto) => (
          <div className="cardProduto" key={produto.id}>

            <img
              src={produto.img}
              alt={produto.nome}
              className="imgProduct"
            />

            <p className="nomeDoProduto">{produto.nome}</p>

            <p className="descricaoProduto">
              {produto.descricao}
            </p>

            <div className="infoPreco">
              <p className="precoProdutos">{produto.preco}</p>
              <button className="btnCarrinho">ADD</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;