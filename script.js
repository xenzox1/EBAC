$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    
    $('#registration-form').submit(function(event) {
        event.preventDefault();
        
        const nome = $('#fullname').val();

        alert(`Parabéns ${nome}!! Você conseguiu enviar um formulário.`)
    });
});