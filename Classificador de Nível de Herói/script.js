// Função para classificar o herói com base no XP
function classificarHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return `O Herói de nome ${nome} está no nível de ${nivel}.`;
}

// Manipula o envio do formulário
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém o nome e o XP inseridos
    const nome = document.getElementById("nome").value.trim();
    const xp = parseInt(document.getElementById("xp").value);

    // Valida se os campos estão preenchidos corretamente
    if (nome && !isNaN(xp) && xp > 0) {
        const resultado = classificarHeroi(nome, xp);
        document.getElementById("mensagem").innerText = resultado;
    } else {
        // Mensagem de erro se os campos estiverem incorretos
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos corretamente!";
    }
});
