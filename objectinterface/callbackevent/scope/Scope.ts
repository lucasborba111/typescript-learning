const inputElement = document.getElementById('inputChange');

inputElement?.addEventListener('change', function (this: HTMLElement, event: Event) {
    if (inputElement instanceof HTMLInputElement) {
        alert(inputElement.value);
    }
});