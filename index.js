let resultado = document.getElementById('resultado'); 
let btnNumeros = document.getElementsByClassName('botao-numero');
let btnOperadores = document.getElementsByClassName('botao-operadores');
let btnAC = document.getElementById("ac");
let btnC = document.getElementById('c');

let valor_salvo = null;
let operacao_salva = null;

for (botao of btnNumeros){
    botao.addEventListener('click', clicou_numero);
}
function clicou_numero(event) {
    resultado.innerHTML += event.target.innerHTML;
}

btnAC.addEventListener('click', limpar_tudo);

function limpar_tudo(event){
    resultado.innerHTML = "";
}

btnC.addEventListener('click', limpa_um)

function limpa_um(event){
    resultado.innerHTML = resultado.innerHTML.slice(0, resultado.innerHTML.length - 1)
}

for (let botao of btnOperadores){
    botao.addEventListener('click', clicou_operador);
}
function clicou_operador(event) {

    if (!isNaN(resultado.innerHTML)){
        if (valor_salvo === null){
            valor_salvo = Number(resultado.innerHTML);
        }
    }
    operacao_salva = event.target.innerHTML;
    resultado.innerHTML = event.target.innerHTML;
}