function copyText(idText) {
    const texto = document.getElementById(idText).textContent;
    navigator.clipboard.writeText(texto);
}