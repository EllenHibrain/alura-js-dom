const BotaoConclui = function() {
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir";
    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui
}

const concluirTarefa = function(evento) {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle("done");
}

export default BotaoConclui;