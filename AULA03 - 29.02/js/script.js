const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const resetar = document.getElementById('resetar')
const lampada = document.getElementById('lamp')
const texto = document.getAnimations('Mudar')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna TRUE ou FALSE
}
function lampLigada(){
    if (!estaQuebrada ()){
        lampada.src = "img/ligada.jpg"
        estado.textContent = "a lâmpada está ligada"
    }
}
function lampDesligada(){
    if (!estaQuebrada ()){
        lampada.src = "img/desligada.jpg"
        estado.textContent = "a lâmpada está desligada"
    }
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    estado.textContent = "a lâmpada está quebrada, resete"
}
function lampRestaurada(){
    lampada.src = "img/desligada.jpg"
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click', lampDesligada)
resetar.addEventListener('click', lampRestaurada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)
lampada.addEventListener('dblclick', lampQuebrada)