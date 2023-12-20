let lista = document.getElementById("itens");
let mensagemPrincipal = document.getElementById("principal");
let arrayLista = [];
let adicionarBTN = document.getElementById("Adicionarbtn");
let removerBTN = document.getElementById("removerbtn");
let valorLista = lista.value;
const button = document.createElement("button");
function carregarItens() {
  mensagemPrincipal.innerText = arrayLista.join("\n");
}

function adicionarNoArray() {
  let valorLista = lista.value.trim();
  if (valorLista !== "") {
    arrayLista.push(lista.value.trim());
    lista.value = null;
    carregarItens();
    window.alert(arrayLista);
  } else {
    window.alert(
      "Caixa de texto vazia. Verifique os campos e tente novamente."
    );
  }
  marcarComoFeito();
}
function removerLista() {
  arrayLista = [];
  carregarItens();
}

function marcarComoFeito() {
  button.innerText = "feito✅";
  document.body.appendChild(button);
}

adicionarBTN.addEventListener("click", adicionarNoArray);
removerBTN.addEventListener("click", removerLista);
