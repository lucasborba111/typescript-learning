const nodeList = document.querySelectorAll<HTMLElement>(".link");

function changeColorAndBorder(linkArray: HTMLElement[]) {
  linkArray.forEach((element) => {
    if (element instanceof HTMLElement) element.style.border = "#FF0000 solid 1px";
  });
}

changeColorAndBorder(Array.from(nodeList));