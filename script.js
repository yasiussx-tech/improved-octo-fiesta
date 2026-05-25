// 1. Definiçã da função (a "receita" de bolo)
function verificarSituacao(nome, media) {
    if (media >= 60) {
        console.log(nome + ' foi aprovado com média ' + media);
    } else {
        console.log(nome + ' foi reprovado com média ' + media);
    }
}

// 2. Chamada da função (usando a "receita" para pessoas diferentes)
verificarSituacao("Julia", 55);
verificarSituacao("Rodrigo", 75);
verificarSituacao("Maria", 80);
verificarSituacao("Carlos", 45);