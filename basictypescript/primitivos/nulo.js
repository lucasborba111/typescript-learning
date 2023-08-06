"use strict";
/* null é um tipo primitivo que representa a ausência de valor.
É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas. */
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
if (button)
    button.click();
button?.click();
console.log(typeof null);
