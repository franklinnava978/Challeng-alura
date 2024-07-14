function encriptar() {
    const inputText = document.getElementById('text1').value;
    let resultado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('mensaje_encriptado').innerText = resultado;
    mostrarMensajeEncriptado();
    mostrarBotonCopiar();
}

function desencriptar() {
    const inputText = document.getElementById('text1').value;
    let resultado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('mensaje_encriptado').innerText = resultado;
    mostrarMensajeEncriptado();
    mostrarBotonCopiar();
}

function copiar() {
    const result = document.getElementById('mensaje_encriptado');
    const range = document.createRange();
    range.selectNodeContents(result);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'Texto copiado al portapapeles' : 'Error al copiar el texto';
        alert(msg);
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }

    // Limpiar la selección
    selection.removeAllRanges();
}

function mostrarMensajeEncriptado() {
    document.getElementById('esperando_mensaje').style.display = 'none';
    document.getElementById('esperando_mensaje1').style.display = 'none';
    document.getElementById('esperando_mensaje2').style.display = 'none';
    document.getElementById('mensaje_encriptado').style.display = 'block';
}

function mostrarBotonCopiar() {
    document.getElementById('copiar').classList.add('visible');
}

document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);
document.getElementById('copiar').addEventListener('click', copiar);
