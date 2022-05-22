/**
 * Função que efetua nosso sorteio
 */
 function raffle() {

    //o valor mínimo digitado pelo usuário no campo posterior à "De" no HTML
    min = parseInt(document.getElementById("min").value);

    //o valor máximo digitado pelo usuário no campo posterior à "Até" no HTML
    max = parseInt(document.getElementById("max").value);

    //efetua o sorteio, pegando um número aleatório dentro do intervalo determinado pelo usuário
    value = Math.floor(Math.random() * (max - min + 1)) + min;

    text = document.getElementById("text");
    text.innerText = 'O número sorteado foi:'

    number = document.getElementById("awnser");
    number.innerText = value
}