"use strict";
function arredonda(valor) {
    if (typeof valor === 'string')
        return Math.ceil(parseInt(valor)).toString();
    else
        return Math.ceil(valor);
}
