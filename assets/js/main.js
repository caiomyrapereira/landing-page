(function (wind, doc) {

    'use strict';

    console.log('init')

    const $inputFullName = doc.querySelector('[data-js="inputFullName"]');
    const $inputEmail = doc.querySelector('[data-js="inputEmail"]');
    const $inputAssunto = doc.querySelector('[data-js="inputAssunto"]');
    const $inputMessage = doc.querySelector('[data-js="inputMensagem"]');
    const $buttonSend = doc.querySelector('[data-js="send"]');
    const $textFullName = doc.querySelector('[data-js="textFullName"]');
    const $textEmail = doc.querySelector('[data-js="textEmail"]');
    const $textAssunto = doc.querySelector('[data-js="textAssunto"]');
    const $textMessage = doc.querySelector('[data-js="textMessage"]');


    $inputFullName.addEventListener('input', updateInputFullNameValue);
    $inputEmail.addEventListener('input', updateInputEmailValue);
    $inputAssunto.addEventListener('input', updatedInputAssuntoValue);
    $inputMessage.addEventListener('input', updatedInputMessageValue);
    $buttonSend.addEventListener('click', send);

    function updateInputFullNameValue(e) {
        const fullName = e.target.value.replace(/\s/g, '');
        const status = fullName.length > 3 && valitadedFullName(fullName);
        $textFullName.textContent = UpdatedText(status, 'Nome');
        $textFullName.style.color = updatedTextColor(status);
    }

    function updateInputEmailValue(e) {
        const email = e.target.value;
        $textEmail.textContent = UpdatedText(validMail(email), 'Email');
        $textEmail.style.color = updatedTextColor(validMail(email));
    }

    function updatedInputAssuntoValue(e) {
        const assuntoValue = e.target.value;
        if (assuntoValue.length >= 50) {
            $textAssunto.textContent = `O texto é muito grande, digite no máximo ${50} caracteres`;
            $textAssunto.style.color = updatedTextColor(false);
            $textAssunto.style.display = 'block';
        }
        else {
            $textAssunto.style.display = 'none';
        }
    }

    function updatedInputMessageValue(e) {
        const messageValue = e.target.value;
        if (messageValue.length >= 100) {
            $textMessage.textContent = `O texto é muito grande, digite no máximo ${100} caracteres`;
            $textMessage.style.color = updatedTextColor(false);
            $textMessage.style.display = 'block';
        }
        else {
            $textMessage.style.display = 'none';
        }
    }

    function send(e) {
        e.preventDefault()
        const statuInputs = valitadedFullName($inputFullName.value) && $inputFullName.value.length>=3  &&  validMail($inputEmail.value) && 
        $inputAssunto.value.length >= 3 && $inputAssunto.value.length < 50 && 
        $inputMessage.value.length >= 3 && $inputMessage.value.length < 100;

        if (statuInputs)
            alert('Formulário enviado com sucesso!');
        else
            alert('Preencha o formulário corretamente antes de enviar...')
    }

    function valitadedFullName(fullName) {
        const reg = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
        return reg.test(fullName);
    }

    function updatedTextColor(result) {
        if (result)
            return 'green';
        return 'red';
    };

    function UpdatedText(result, name) {
        if (result)
            return `${name} Válido`;
        return `${name} Inválido`;
    }

    function validMail(mail) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
            .test(mail);
    }

})(window, document);