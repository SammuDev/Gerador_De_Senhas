import geraPassword from "./Geradores";

const inputSenha = document.querySelector('.password');
const button = document.querySelector('.btn');

const inputQnt = document.querySelector('.qnt');
const ipt1 = document.querySelector('.ipt1');
const ipt2 = document.querySelector('.ipt2');
const ipt3 = document.querySelector('.ipt3');
const ipt4 = document.querySelector('.ipt4');

function gera() {
    const senha = geraPassword(
     inputQnt.value,
     ipt1.checked,
     ipt2.checked,
     ipt3.checked,
     ipt4.checked,
    );
    return senha || 'Selecione Uma Opção Válida!';
}

export default () => {
    button.addEventListener('click', () => {
        // inputSenha.innerHTML = '';
        inputSenha.innerHTML = gera();
    });
}
