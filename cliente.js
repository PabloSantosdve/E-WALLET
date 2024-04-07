function exibirCartoes()
{
    let todosCartoes = document.querySelectorAll(".cartoes")

    todosCartoes.forEach(function(cartao) {
        cartao.style.display = "block"
    });
}

function moverCartao(id)
{
    let principalImg = document.getElementById('principal') // Variavél que armazena todo o elemento do cartão principal (cartão maior da página)
    let cartaoImg = document.getElementById(id) // Variavel que armazena o cartão que o usuário clicou
    let valorFatura = document.getElementById('fatura1') // variavel que armazena o elemento que exibe o valor da fatura

    valorFatura.innerText= "R$ 1500,64" 

    // Esse swicth vai verificar em qual cartão o usuário clicou e atribuir um valor de fatura diferente para cada cartão
    switch(id)
    {
        // Caso: Se ID == 'cartão-tal", o valor da fatura vai ser x
        case "cartao-nubank":
            valorFatura.innerText= "R$ 800,00"
            break
        case "cartao-bradesco":
            valorFatura.innerText= "R$ 500,40"
            break
        case "cartao-verde":
            valorFatura.innerText= "R$ 238,60"
            break
        case "cartao-amarelo":
            valorFatura.innerText= "R$ 1015,22"
            break
    }
    
    // O cartão que está como principal, tem seu elemento com display none, quando trocar o cartão principal precisa exibir o antigo e esconder o novo cartão escolhido
    exibirCartoes()

    cartaoImg.style.display = "none" // escondendo o elemento do cartão que o usuário clicou
    principalImg.src = cartaoImg.src // Trocando o caminho das imagens do elemento principal para "trocar o cartão" de lugar
}