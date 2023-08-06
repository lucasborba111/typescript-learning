"use strict";
const alertButton = document.getElementById('alertHandler');
const defaultsEvents = function (event) {
    if (event instanceof TouchEvent)
        alert(event.touches[0].pageX);
    if (event instanceof MouseEvent)
        alert(event.pageX);
};
alertButton?.addEventListener('touchstart', defaultsEvents);
