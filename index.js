// Dentre as funcionalidades, espera-se que seja possível:
// - Adicionar um item na lista de supermercado
// - Editar um item na lista de supermercado
// - Remover um item na lista de supermercado
// - Listar todos os itens da lista de supermercado
// - Obter um item na lista de supermercado, através de um parâmetro (id)

const listaDeItems = ['uva', 'maçã', 'banana'];
let novoItem = undefined


//função para botão de inserir item na Lista de Supermercado
function inserirItem() {
    const valorDoInput = document.getElementById('item').value;
    if (valorDoInput.trim() !== '') {
        listaDeItems.push(valorDoInput);
        document.getElementById('item').value = '';
        criarLista();
    }
}

// Editar um item na lista de supermercado
function editarItem() {
    const itemParaModificar = document.getElementById('itemParaModificar').value;
    if (listaDeItems.includes(itemParaModificar)) {
        const novoItem = String(document.getElementById('itemModificado').value);
        const novaLista = listaDeItems.map((item) => ((item === itemParaModificar ? novoItem : item)))
        document.getElementById('itemParaModificar').value = '';
        document.getElementById('itemModificado').value = '';

        const ol = document.getElementById('listaItens');
        ol.innerHTML = '';
        novaLista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ol.appendChild(li);
        });;
    }
}

//Remover um item na lista de supermercado pelo Nome
function removerItemdaLista() {
    const inputDeRemoção = String(document.getElementById('itemRemovido').value);
    if (listaDeItems.includes(inputDeRemoção)) {
        const acharIndex = listaDeItems.indexOf(inputDeRemoção)
        listaDeItems.splice(acharIndex, 1)
        document.getElementById('itemRemovido').value = '';
        criarLista();
    }
}

//Encontrar um item na lista de supermercado pelo Nome
function encontrarItemdaListaPeloNome() {
    const inputParaEncontrar = String(document.getElementById('itemEncontrado').value);
    const texto = document.getElementById('texto')

    if (listaDeItems.includes(inputParaEncontrar)) {
        const itemEncontrado = listaDeItems.filter((item) => item === inputParaEncontrar)
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = `${itemEncontrado[0]}`;
        texto.appendChild(novoParagrafo);
        document.getElementById('itemEncontrado').value = '';

        return novoParagrafo;
    }
    return null;
}


// Obter um item na lista de supermercado, através de um parâmetro (id)
const itemDaLista = ListaDeItemsComID.filter((item) => item.id == 1)

// Função para Listar todos os produtos e colocar a lista atualizada no HTML
function criarLista() {
    const ol = document.getElementById('listaItens');
    ol.innerHTML = '';
    listaDeItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });
}


//Exportar para o HTML
window.onload = criarLista, editarItem, encontrarItemdaListaPeloNome;



