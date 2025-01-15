import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia();
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia();
