import geraPassword from "./Geradores";

const inputSenha = document.querySelector('.password');
const button = document.querySelector('.btn');

const iptQnt = document.querySelector('.iptQnt');

const iptMaior = document.querySelector('.iptMaior');
const iptMenor = document.querySelector('.iptMenor');
const iptNum = document.querySelector('.iptNum');
const iptSym = document.querySelector('.iptSym');

function gera() {
    const senha = geraPassword(
    iptQnt.value,
     
    iptMaior.checked,
    iptMenor.checked,
    iptNum.checked,
    iptSym.checked,
    );
    return senha || 'Selecione Uma Opção Válida!';
}

export default () => {
    button.addEventListener('click', () => {
        console.log('OI!');
        inputSenha.innerHTML = '';
        inputSenha.innerText = gera();
    });
}
