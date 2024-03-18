function reajustar() {
    var nome = prompt("Digite o nome do funcionário:")
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))

    var salarioAtual = prompt("Digite o salário atual de " + nome + ":")
    console.log('O valor é: ' , salarioAtual)
    console.log(typeof(salarioAtual))

    var porcentagemReajuste = prompt("Digite a porcentagem de reajuste salarial para " + nome + ":");
    console.log('A porcentagem é:' , porcentagemReajuste)
    console.log(typeof(porcentagemReajuste))

    var salarioReajustado = salarioAtual * (1 + porcentagemReajuste / 100);

    var paragrafo = document.getElementById("resul")
    paragrafo.textContent = nome + " recebeu um amento salarial"

    var paragrafo = document.getElementById("salI")
    paragrafo.textContent = 'O salário atual era: R$ ' + salarioAtual

    var paragrafoReajuste = document.getElementById("salA");
    paragrafoReajuste.textContent = 'Com um aumento de ' + porcentagemReajuste + '%, o salário vai aumentar R$ ' +
    (salarioAtual * porcentagemReajuste / 100).toFixed(2) + ' no próximo mês.' 

    var paragrafo = document.getElementById("salF")
    paragrafo.textContent = 'E a partir daí, ' + nome + ' vai passar a ganhar R$' + salarioReajustado.toFixed(2);
}