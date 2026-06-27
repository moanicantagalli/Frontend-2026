// =============================================
// Questão 04 - Revelar Perfil do Jogador
// =============================================
function revelar() {
    // 1. Troca a imagem principal pela foto do jogador
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "img/_vinicius_junior.png";
    imagem.alt = "Foto de Vinícius Júnior";

    // 2. Preenche os spans com as informações do jogador
    document.getElementById("Nome").textContent = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("Rank").textContent = "9,5";
    document.getElementById("Data_Nas").textContent = "Data de Nascimento: 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "Altura: 1,76 m";
    document.getElementById("Posição ").textContent = "Posição: Ponta-esquerda / Atacante";

    // 3. Remove a classe "placeholder" e aplica "card-text" nos elementos afetados
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

    // Remove os efeitos de placeholder do título e do parágrafo "pai"
    document.getElementById("Nome").parentElement.classList.remove("placeholder-glow");
    const paragrafo = document.querySelector(".card-body p.placeholder-glow");
    if (paragrafo) {
        paragrafo.classList.remove("placeholder-glow");
    }
}
