"use strict";
const nodeList = document.querySelectorAll(".link");
function changeColorAndBorder(linkArray) {
    linkArray.forEach((element) => {
        if (element instanceof HTMLElement)
            element.style.border = "#FF0000 solid 1px";
    });
}
changeColorAndBorder(Array.from(nodeList));
