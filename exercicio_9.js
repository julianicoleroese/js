const mensagensDivertidas = [
    "Sabe o que o melão estava fazendo de mãos dadas com o mamão perto de Copacabana? Levando o mamão papaya.",
    "Por que o pinheiro não se perde na floresta? Porque ele tem um mapinha.",
    "Como é que faz para um passarinho rir? Fácil: joga ele na parede que ele racha o bico.",
    "Minha avó começou a andar 5 km por dia quando ela tinha 70 anos. Agora ela está com 85 e não fazemos ideia de onde ela está.",
    "O que um tijolo falou pro outro? Há um ciumento entre nós.",
];

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagensDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function() {
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)];
    mensagensDivertida.textContent = mensagemAleatoria;
});