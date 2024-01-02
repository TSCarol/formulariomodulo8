const form = document.getElementById('form-agenda');

const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-agenda');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

   const novaLinha = document.createElement('tr');

   novaLinha.innerHTML = `
        <td>${inputNomeContato.value}</td>
        <td>${inputNumeroTelefone.value}</td>
    `;

    corpoTabela.appendChild(novaLinha);

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';

});