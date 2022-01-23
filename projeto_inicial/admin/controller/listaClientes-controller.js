import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `<td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`;
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id; //foi criado um atributo data-id que recebe o valor do id que vem do json-server
    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir';
    if (ehBotaoDeletar){
        try{
            const linhaCliente = evento.target.closest('[data-id]'); //pega o elemento mais proximo de data-id que é o data attribute da TR
            let id = linhaCliente.dataset.id;
            await clienteService.removeCliente(id);
            linhaCliente.remove(); //remove toda a tr
        } 
        catch(erro){
            console.error(erro);
            window.location.href = '../telas/erro.html';
        }
    }
});

const render = async () => {
    try{
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => { //itera cada elemento da resposta
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)); //exibe os dados dos clientes na pagina lista_cliente
        }); //response obtem o valor do que o servidor devolveu na requisição
    } 
    catch(erro){
        console.error(erro)
        window.location.href = '../telas/erro.html'
    };
};

render();