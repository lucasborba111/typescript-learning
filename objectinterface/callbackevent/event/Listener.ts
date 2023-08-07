const alertButton = document.getElementById('alertHandler');

const defaultsEvents = function (event: Event) {
    if (event instanceof TouchEvent) alert(event.touches[0].pageX);
    if (event instanceof MouseEvent) alert(event.pageX);
}

alertButton?.addEventListener('touchstart', defaultsEvents);
alertButton?.addEventListener('click', defaultsEvents);
