const form = document.getElementById('form-input');
const campoA = document.getElementById('input-dados1');
const campoB = document.getElementById('input-dados2');
let formEValido = false;

function validaNumero(campoA,campoB) {
    return campoB !== campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O <b>campo B: ${campoB.value}</> é maior que o <b>campo A: ${campoA.value}</b>.`;

    formEValido = validaNumero(campoA.value, campoB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});

