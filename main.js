const form = document.getElementById('form-deposito');

function validaNumero(numeroA, numeroB) {
    return numeroA < numeroB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = Number(document.getElementsByName("numeroA")[0].value);
    const numeroB = Number(document.getElementsByName("numeroB")[0].value);
    const mensagemSucesso = `Seu Número A: <b>${numeroA}</b> deve ser menor que o Numero B: <b>${numeroB}</b>.Tente novamente!`;

    if (validaNumero(numeroA, numeroB)) {
        alert("O número B é maior que o número A. Ou seja seu formulário foi Validado com SUCESSO !");
    } else {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementsByName("numeroA")[0].value = '';
        document.getElementsByName("numeroB")[0].value = '';
    }
});

console.log(form);
