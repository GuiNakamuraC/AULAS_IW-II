function comprar(){
    var nome = prompt('Informe o nome do produto: ')
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))
    var valor = prompt('Informe o valor do produto: ')
    console.log('O valor é: ' , valor)
    console.log(typeof(valor))
    var pagamento = prompt('Informe o valor  que você deu: ')
    console.log('O pagamento foi de: ' , pagamento)
    console.log(typeof(pagamento))
    var paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = 'Você irá comprar um(a) '+ nome +' por R$' + valor
    var paragrafo = document.getElementById("mensagempag")
    paragrafo.textContent = 'Você deu: R$' + pagamento 
    var paragrafo = document.getElementById("mensagemtro")
    paragrafo.textContent = 'Você irá receber o troco de R$' + (pagamento-valor)
}