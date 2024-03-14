var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var resultDisplay = document.getElementById('resultado');

function pegaNumero() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    return [num1, num2];
}

function soma() {
    var numeros = pegaNumero();
    var resultado = numeros[0] + numeros[1];
    resultDisplay.textContent = 'O resultado é ' + resultado;
}

function sub() {
    var numeros = pegaNumero();
    var resultado = numeros[0] - numeros[1];
    resultDisplay.textContent = 'O resultado é ' + resultado;
}

function mult() {
    var numeros = pegaNumero();
    var resultado = numeros[0] * numeros[1];
    resultDisplay.textContent = 'O resultado é ' + resultado;
}

function div() {
    var numeros = pegaNumero();
        var resultado = numeros[0] / numeros[1];
        resultDisplay.textContent = 'O resultado é ' + resultado;
}

function limpar() {
    num1Input.value = '';
    num2Input.value = '';
    resultDisplay.textContent = 'O resultado é 0';
}