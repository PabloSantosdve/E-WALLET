function exibirCartoes()
{
    let todosCartoes = document.querySelectorAll(".cartoes")

    todosCartoes.forEach(function(cartao) {
        cartao.style.display = "block"
    });
}

function moverCartao(id)
{
    let principalImg = document.getElementById('principal')
    let cartaoImg = document.getElementById(id)

    let valor = document.getElementById('fatura1')
    valor.innerText= "R$ 1500,64" 

    let valor1 = document.getElementsByClassName('fatura2')
    valor.innerText= "R$ 2000,00"

    let valor2 = document.getElementsByClassName('fatura3')
    valor.innerText= "R$ 900,00"



    exibirCartoes()

    cartaoImg.style.display = "none"


    principalImg.src = cartaoImg.src
}