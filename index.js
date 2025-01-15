const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
console.log(inputItem.value);
let contador = 0;

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  containerItemDaLista.appendChild(inputCheckBox);
  containerItemDaLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemDaLista);
  listaDeCompras.appendChild(itemDaLista);
});
