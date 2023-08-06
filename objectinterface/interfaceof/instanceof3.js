"use strict";
// html <a id='origamid' href='http://www.origamid.com'> </a>
const link = document.getElementById("origamid");
/* get by id ira retornar a classe genérica HtmlElement mas o <a>
é instancia de HTMLAnchorElement e precisa fazer a verificação */
if (link instanceof HTMLAnchorElement) { //verificando se é instancia, caso seja instancia ele não apontará erro
    link.href = "https://www.origamid.com";
}
