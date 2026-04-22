// =============================================
//   AMIGO SECRETO
//   Autor: Reidner Verdino
//   Descrição: Sorteio de amigo secreto
//              diretamente no navegador
// =============================================


// ── ESTADO GLOBAL ──────────────────────────
// Array que armazena os nomes dos participantes
let amigos = [];


// ── FUNÇÕES PRINCIPAIS ─────────────────────

/**
 * Adiciona um novo amigo à lista de participantes.
 * - Lê o valor do campo de input
 * - Valida se o campo não está vazio
 * - Adiciona o nome ao array e atualiza a lista na tela
 */
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras das bordas

    // Validação: impede nomes vazios
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);  // Adiciona o nome ao array
    input.value = "";   // Limpa o campo de texto
    atualizarLista();   // Atualiza a lista exibida na tela
}

/**
 * Atualiza a lista visual de amigos na página.
 * Limpa a lista atual e recria os itens a partir do array `amigos`.
 */
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de redesenhar

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

/**
 * Sorteia um amigo secreto aleatoriamente da lista.
 * - Verifica se há participantes cadastrados
 * - Gera um índice aleatório
 * - Exibe o nome sorteado na tela
 */
function sortearAmigo() {
    // Validação: a lista precisa ter ao menos um participante
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho da lista - 1
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    // Exibe o resultado na seção de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
