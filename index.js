const dadosCardControleBar = {
    titulo: 'Controle de Bar',
    imagem: 'assets/controle-de-bar.png',
    gif: 'https://i.imgur.com/kioD02O.gif',
    urlRepositorio: 'https://github.com/Iagodizlla/controle-de-bar',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light'
        ],
        descricao: `O sistema de Controle de Bar é um projeto que visa o gerenciamento de um bar, com o controle de estoque, funcionários, clientes e pedidos. O sistema permite a criação de pedidos, a atualização do estoque e a visualização dos dados dos clientes e funcionários.`
};

const dadosCardGestaoEquipamentos = {
    titulo: 'Gestão de Equipamentos',
    imagem: 'assets/gestao-de-equipamentos.png',
    gif: 'https://i.imgur.com/kxM2Bre.gif',
    urlRepositorio: 'https://github.com/iagodizlla/gestao-de-equipamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
}

const dadosCardSitePessoal = {
    titulo: 'Site Pessoal',
    imagem: 'assets/iSrYNtB2ZK.png',
    gif: 'https://i.imgur.com/AEdcdKF.gif',
    urlRepositorio: 'https://github.com/Iagodizlla/Site_Prototipo',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light'
    ],
    descricao: `Este é o meu site pessoal, onde compartilho informações sobre mim, meu server de Minecraft e minigames, como torneios e batalhas em equipes.`   
}

const dadosCardAgenda = {
    titulo: 'E-Agenda',
    imagem: 'assets/e-agenda.png',
    gif: 'https://i.imgur.com/cAuC5j0.gif',
    urlRepositorio: 'https://github.com/Xique-Xique-Bahia/e-Agenda',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light'
    ],
    descricao: `A e-Agenda é um sistema web para gerenciar tarefas, contatos, compromissos, categorias e despesas. Permite cadastrar, editar, excluir e visualizar registros, com suporte a itens de tarefa, prioridades e controle de conclusão. Ideal para organização pessoal e profissional.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleBar)
        return;

    cardSelecionado = dadosCardControleBar;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardGestaoEquipamentos)
        return;

    cardSelecionado = dadosCardGestaoEquipamentos;
    carregarDadosCardAtual();
}

function selecionarTerceiroCard() {
    if (cardSelecionado == dadosCardSitePessoal)
        return;

    cardSelecionado = dadosCardSitePessoal;
    carregarDadosCardAtual();
}

function selecionarQuartoCard() {
    if (cardSelecionado == dadosCardAgenda)
        return;

        cardSelecionado = dadosCardAgenda;
        carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnSelecionarTerceiroCard = document.getElementById("btnSelecionarTerceiroCard");
    const btnSelecionarQuartoCard = document.getElementById("btnSelecionarQuartoCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnSelecionarTerceiroCard.addEventListener('click', selecionarTerceiroCard);
    btnSelecionarQuartoCard.addEventListener('click', selecionarQuartoCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);