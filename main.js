const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%&*()_-=+/*-+.,;:?~^][{}<>';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

function geraPassword(qnt, maior, menor, num, simb) {
    const senhasArr = [];
    qnt = Number(qnt);

    for (let i = 0; i < qnt; i++) {
        maior && senhasArr.push(geraMaiusculas());
        menor && senhasArr.push(geraMinusculas());
        num && senhasArr.push(geraNumeros());
        simb && senhasArr.push(geraSimbolos());
    }

    return senhasArr.join('').slice(0, qnt);
    // pass.innerText = '';
    // pass.innerHTML = senhasArr.join('').slice(0, qnt);
}

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

button.addEventListener('click', () => {
    console.log('OI!');
    inputSenha.innerHTML = '';
    inputSenha.innerText = gera();
});

gera();
