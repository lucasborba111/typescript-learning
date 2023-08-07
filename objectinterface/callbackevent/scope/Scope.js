"use strict";
const inputElement = document.getElementById('inputChange');
inputElement?.addEventListener('change', function (event) {
    if (inputElement instanceof HTMLInputElement) {
        alert(inputElement.value);
    }
});
