// JavaScript para o Exemplo 1: Modificar Conteúdo de Texto
/**
 * Altera o conteúdo de texto do parágrafo com id 'demo'.
 * Utiliza `document.getElementById` para selecionar o elemento e `innerHTML` para modificar seu texto.
 */
function changeText() {
    document.getElementById('demo').innerHTML = 'O texto foi alterado pelo JavaScript!';
}

/**
 * Restaura o conteúdo de texto original do parágrafo com id 'demo'.
 * Utiliza `document.getElementById` para selecionar o elemento e `innerHTML` para reverter seu texto.
 */
function resetText() {
    document.getElementById('demo').innerHTML = 'JavaScript pode fazer muitas coisas, como: Mudar texto em arquivo html.';
}

// JavaScript para o Exemplo 2: Modificar Estilo de Elementos
/**
 * Altera a cor, tamanho da fonte e peso da fonte do parágrafo com id 'styleDemo'.
 * Acessa as propriedades de estilo do elemento através de `element.style`.
 */
function changeStyle() {
    let element = document.getElementById('styleDemo');
    element.style.color = 'blue';
    element.style.fontSize = '24px';
    element.style.fontWeight = 'bold';
}

/**
 * Restaura a cor, tamanho da fonte e peso da fonte originais do parágrafo com id 'styleDemo'.
 * Reverte as propriedades de estilo do elemento.
 */
function resetStyle() {
    let element = document.getElementById('styleDemo');
    element.style.color = 'black';
    element.style.fontSize = '16px';
    element.style.fontWeight = 'normal';
}

// JavaScript para o Exemplo 3: Adicionar Novos Itens à Lista
let itemCount = 2; // Para controlar o número de itens

/**
 * Adiciona um novo item à lista não ordenada com id 'listDemo'.
 * Cria um novo elemento `<li>`, define seu texto e o anexa ao `<ul>` existente.
 */
function addItemToList() {
    itemCount++;
    let ul = document.getElementById('listDemo');
    let li = document.createElement('li'); // Cria um novo elemento <li>
    li.innerHTML = 'Novo Item Adicionado ' + itemCount; // Define o conteúdo do novo item
    ul.appendChild(li); // Adiciona o novo item à lista
}

// JavaScript para o Exemplo 4: Alterar Imagens
/**
 * Altera a imagem exibida no elemento `<img>` com id 'myImage' com base no estado ('on' ou 'off').
 * Modifica o atributo `src` da imagem para carregar uma imagem diferente.
 * Também atualiza o atributo `alt` para acessibilidade.
 * @param {string} state - O estado desejado da lâmpada ('on' para ligada, 'off' para desligada).
 */
function changeImage(state) {
    let image = document.getElementById('myImage');
    if (state === 'on') {
        image.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        image.alt = 'Lâmpada Ligada';
    } else {
        image.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        image.alt = 'Lâmpada Desligada';
    }
}

// JavaScript para o Exemplo 5: Alterar Conteúdo de Div
/**
 * Altera o conteúdo de texto da div com id 'myDiv'.
 * Utiliza `document.getElementById` para selecionar o elemento e `innerHTML` para modificar seu texto,
 * permitindo formatação HTML.
 */
function changeDivContent() {
    document.getElementById('myDiv').innerHTML = 'O conteúdo da DIV foi <span style="color: red;">alterado</span> com sucesso!';
}

/**
 * Restaura o conteúdo de texto original da div com id 'myDiv'.
 * Reverte o texto do elemento.
 */
function resetDivContent() {
    document.getElementById('myDiv').innerHTML = 'Conteúdo inicial da DIV.';
}

// JavaScript para o Exemplo 6: Ocultação e Exibição de Elementos
/**
 * Oculta o parágrafo com id 'hiddenText' definindo sua propriedade CSS 'display' como 'none'.
 */
function hideElement() {
    document.getElementById('hiddenText').style.display = 'none';
}

/**
 * Exibe o parágrafo com id 'hiddenText' definindo sua propriedade CSS 'display' como 'block'.
 */
function showElement() {
    document.getElementById('hiddenText').style.display = 'block';
}

/**
 * Oculta a div com id 'hiddenDiv' definindo sua propriedade CSS 'display' como 'none'.
 */
function hideDiv() {
    document.getElementById('hiddenDiv').style.display = 'none';
}

/**
 * Exibe a div com id 'hiddenDiv' definindo sua propriedade CSS 'display' como 'block'.
 */
function showDiv() {
    document.getElementById('hiddenDiv').style.display = 'block';
}

// JavaScript para o Exemplo 3 de Ocultação e Exibição de Elementos: Alternar Display
/**
 * Alterna a visibilidade da div com id 'caixaDisplay'.
 * Se estiver oculta (`display: 'none'`), torna-a visível (`display: 'block'`).
 * Se estiver visível, oculta-a.
 */
function alternarDisplay() {
    let caixa = document.getElementById('caixaDisplay');
    if (caixa.style.display === 'none') {
        caixa.style.display = 'block';
    } else {
        caixa.style.display = 'none';
    }
}

// JavaScript para o evento onfocus
/**
 * Altera a cor de fundo do campo de input com id 'myInput' quando ele recebe foco.
 * Demonstra o uso do evento `onfocus`.
 */
function onFocus() {
    document.getElementById('myInput').style.backgroundColor = 'lightblue';
}

// JavaScript para o evento onsearch e oninput
/**
 * Executa uma pesquisa e exibe o termo pesquisado.
 * Obtém o valor do input com id 'mySearch' e o exibe no parágrafo 'pesquisaResult'.
 * Demonstra a captura de termos de pesquisa e a atualização dinâmica da página.
 */
function executarPesquisa() {
    // Pega o valor do input de pesquisa
    let pesquisa = document.getElementById('mySearch').value;

    // Exibe o que foi pesquisado em um elemento de parágrafo
    document.getElementById('pesquisaResult').textContent = 'Você pesquisou por: ' + pesquisa;
    
    // Opcional: Mostra o valor no console do navegador para depuração
    console.log('Pesquisando automaticamente:', pesquisa);
}
