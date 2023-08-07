function extractText<Tipo extends HTMLElement>(el: Tipo): string {
    return el.innerText;
  }
  
  const link = document.querySelector('a');
  
  if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
  }
  
  // Exemplo 2
  function $<Tipo extends Element>(selector: string): Tipo | null {
    return document.querySelector(selector);
  }
  
  const link = $<HTMLAnchorElement>('a')?.href;