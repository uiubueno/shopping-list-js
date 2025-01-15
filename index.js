import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);
