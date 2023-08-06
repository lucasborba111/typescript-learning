"use strict";
;
async function fetchProduct() {
    const resp = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await resp.json();
    showData(data);
}
function showData(data) {
    alert(`Nome: ${data.nome}, Preço: ${data.preco}`);
}
fetchProduct();
