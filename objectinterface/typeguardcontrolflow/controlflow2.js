"use strict";
const obj = {
    nome: 'Origamid',
};
if ('nome' in obj) {
    console.log('Sim');
}
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ('preco' in data) {
        document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
        <p>Preço: R$ ${data.preco + 100}</p>
      `;
    }
}
fetchProduto();
