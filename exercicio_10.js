let numeroSecreto = Math.floor(Math.random() * 100) +1

let qtdTentativas = 0

let verificarBotao = document.getElementById("verificarBotao");
let tentativaEntrada = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function(){

    cont tentativa = parseInt(tentativaEntrada.value);

    If(tentativa === numeroSecreto){
        dica.textContent = "Parabéns! Você acertou em ${qtdTentativas}.";
        qtdTentativas++;
    }
    else if(tentativa < numeroSecreto){
        dica.textContent = "Parabéns! Você acertou em ${qtdTentativas}.";
        qtdTentativas++;
    }else{
        dica.textContent = "Parabéns! Você acertou em ${qtdTentativas}.";
        qtdTentativas++;
    }
}
);