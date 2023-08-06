"use strict";
function numeroMaiorQue10(data) {
    return data.filter(p => p > 10);
}
console.log(numeroMaiorQue10([1, 5, 9, 10.9, 22, 33, 44]));
