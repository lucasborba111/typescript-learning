"use strict";
function extractText(el) {
    return el.innerText;
}
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
const link = $('a')?.href;
