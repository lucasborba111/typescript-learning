"use strict";
// Transformar em número com validação
function toNumber(numero) {
    const tipo = typeof numero;
    if (tipo === 'number')
        return numero;
    if (tipo === 'string')
        return Number(numero);
    throw new Error('Tipagem incorreta');
}
console.log(toNumber('1'));
