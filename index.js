let resultado = document.getElementById("resultado");
let btnNumeros = document.getElementsByClassName("botao-numero");
let btnOperadores = document.getElementsByClassName("botao-operadores");
let btnAC = document.getElementById("ac");
let btnC = document.getElementById("c");

let valor_salvo = null;
let operacao_salva = null;

for (botao of btnNumeros) {
  botao.addEventListener("click", clicou_numero);
}
function clicou_numero(event) {
  if (isNaN(resultado.innerHTML) === false)
    resultado.innerHTML = resultado.innerHTML + event.target.innerHTML;
  else resultado.innerHTML = event.target.innerHTML;
}

btnAC.addEventListener("click", limpar_tudo);
function limpar_tudo(event) {
  resultado.innerHTML = "";
}

btnC.addEventListener("click", limpa_um);
function limpa_um(event) {
  resultado.innerHTML = resultado.innerHTML.slice(
    0,
    resultado.innerHTML.length - 1
  );
}

for (let botao of btnOperadores) {
  botao.addEventListener("click", clicou_operador);
}
function clicou_operador(event) {
  if (isNaN(resultado.innerHTML) === false) {
    if (valor_salvo === null) {
      valor_salvo = Number(resultado.innerHTML);
    } else {
      valor_salvo = executa_operacao(
        valor_salvo,
        operacao_salva,
        Number(resultado.innerHTML)
      );
    }
  }
  operacao_salva = event.target.innerHTML;
  resultado.innerHTML = operacao_salva;
}

let botaoIgual = document.getElementById("botao-igual");
botaoIgual.addEventListener("click", calcula_resultado);
function calcula_resultado(event) {
  if (
    valor_salvo != null &&
    operacao_salva != null &&
    isNaN(resultado.innerHTML) === false
  ) {
    let result = executa_operacao(
      valor_salvo,
      operacao_salva,
      Number(resultado.innerHTML)
    );
    resultado.innerHTML = result;
    valor_salvo = null;
    operacao_salva = null;
  }
}
function executa_operacao(valor1, operador, valor2) {
  if (operador === "*") {
    return (valor1 * valor2).toFixed(4);
  } else if (operador === "/") {
    return (valor1 / valor2).toFixed(4);
  } else if (operador === "-") {
    return valor1 - valor2;
  } else if (operador === "+") {
    return valor1 + valor2;
  }
}

let botaoPonto = document.getElementById("botao-ponto");
botaoPonto.addEventListener("click", clica_ponto);
function clica_ponto(event) {
  if (isNaN(resultado.innerHTML) === true) {
    resultado.innerHTML = ".";
  } else if (resultado.innerHTML.includes(".") === false) {
    resultado.innerHTML = resultado.innerHTML + ".";
  }
}

let body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", pressionou_tecla);
function pressionou_tecla(event) {
  if (event.key === "*") {
    document.getElementById("botao-multiplicacao").click();
  } else if (event.key === "/") {
    document.getElementById("botao-divisao").click();
  } else if (event.key === "-") {
    document.getElementById("botao-menos").click();
  } else if (event.key === "+") {
    document.getElementById("botao-mais").click();
  } else if (event.key === "Escape") {
    document.getElementById("ac").click();
  } else if (event.key === "Backspace") {
    document.getElementById("c").click();
  } else if (event.key === "Enter") {
    document.getElementById("botao-igual").click();
  } else if (event.key === "1") {
    document.getElementById("1").click();
  } else if (event.key === "2") {
    document.getElementById("2").click();
  } else if (event.key === "3") {
    document.getElementById("3").click();
  } else if (event.key === "4") {
    document.getElementById("4").click();
  } else if (event.key === "5") {
    document.getElementById("5").click();
  } else if (event.key === "6") {
    document.getElementById("6").click();
  } else if (event.key === "7") {
    document.getElementById("7").click();
  } else if (event.key === "8") {
    document.getElementById("8").click();
  } else if (event.key === "9") {
    document.getElementById("9").click();
  } else if (event.key === "0") {
    document.getElementById("0").click();
  } else if (event.key === ".") {
    document.getElementById("botao-ponto").click();
  } else if (event.key === ",") {
    document.getElementById("botao-ponto").click();
  }
}
