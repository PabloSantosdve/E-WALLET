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
    valor.innerText= "R$ 1045,50"

    exibirCartoes()

    cartaoImg.style.display = "none"


    principalImg.src = cartaoImg.src
}