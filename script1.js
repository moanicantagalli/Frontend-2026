// questao 4
function revelar() {
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "img/_vinicius_junior.png";

    document.getElementById("Nome").textContent = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("Rank").textContent = "9,5";
    document.getElementById("Data_Nas").textContent = "Data de Nascimento: 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "Altura: 1,76 m";
    document.getElementById("Posição ").textContent = "Posição: Ponta-esquerda / Atacante";

    const elementosTexto = [
        document.getElementById("Nome"),
        document.getElementById("Data_Nas"),
        document.getElementById("Alutra"),
        document.getElementById("Posição ")
    ];

    elementosTexto.forEach(function (el) {
        el.classList.remove("placeholder");
        el.classList.remove("placeholder-glow");
        el.classList.remove("col-6");
        el.classList.remove("col-4");
        el.classList.add("card-text");
    });

    document.getElementById("Nome").parentElement.classList.remove("placeholder-glow");
    const paragrafo = document.querySelector(".card-body p.placeholder-glow");
    if (paragrafo) {
        paragrafo.classList.remove("placeholder-glow");
    }
}
