// TABELA ASCII - Tem no Wikipedia
// 48 - 58 => Números;
// 65 - 91 => Letras Maiúsculas;
// 97 - 123 => Letras Minúsculas;
// Os Símbolos são colocados a mão.

// const pass = document.querySelector('.password');

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%&*()_-=+/*-+.,;:?~^][{}<>';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraPassword(qnt, maior, menor, num, simb) {
    const senhasArr = [];
    qnt = Number(qnt);

    for (let i = 0; i < qnt; i++) {
        maior && senhasArr.push(geraMaiusculas());
        menor && senhasArr.push(geraMinusculas());
        num && senhasArr.push(geraNumeros());
        simb && senhasArr.push(geraSimbolos());
    }

    console.log(senhasArr);
    // pass.innerText = '';
    // pass.innerHTML = senhasArr.join('').slice(0, qnt);
}
