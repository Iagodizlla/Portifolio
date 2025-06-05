const dadosCardControleMedicamentos = {
    titulo: 'Controle de Medicamentos',
    imagem: '',
    gif: '',
    urlRepositorio: 'https://github.com/iagodizlla/controle-medicamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de sa�de, com o controle de fornecimento, estoque, funcion�rios, pacientes e retirada de prescri��es � com foco na rastreabilidade das movimenta��es de estoque.`
};

const dadosCardGestaoEquipamentos = {
    titulo: 'Gest�o de Equipamentos',
    imagem: '',
    gif: '',
    urlRepositorio: 'https://github.com/iagodizlla/gestao-de-equipamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Gest�o de Equipamentos controla o estoque de um almoxarifado, com a gest�o de equipamentos e o registro de chamados de manuten��o que eventualmente ocorrem durante o uso dos equipamentos. Tamb�m s�o inclusas informa��es sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
}

const dadosCardSitePessoal = {
    titulo: 'Servidor de Minecraft',
    imagem: '',
    gif: '',
    urlRepositorio: 'https://github.com/Iagodizlla/Site_Prototipo',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=javascript&theme=light'
    ],
    descricao: `Este � o meu site pessoal, onde compartilho informa��es sobre mim, meus projetos em minecraft. O site � responsivo e foi desenvolvido com HTML, CSS e JavaScript.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card n�o selecionado.');

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
    if (cardSelecionado == dadosCardControleMedicamentos)
        return;

    cardSelecionado = dadosCardControleMedicamentos;
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

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnSelecionarTerceiroCard = document.getElementById("btnSelecionarTerceiroCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnSelecionarTerceiroCard.addEventListener('click', selecionarTerceiroCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);