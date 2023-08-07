"use strict";
//tipo generico de parâmetro que recebe 
const list = [1, 2, 3, 6];
function printObjectInfo(param) {
    const objeto = {
        value: param,
        type: typeof (param)
    };
    return objeto;
}
printObjectInfo(list).value;
