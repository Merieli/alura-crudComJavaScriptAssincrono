
const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `<td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`;
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest(); //http request é o responsavel pela requisição e é através dessa função que ele é inicializado

        http.open('GET', 'http://localhost:3000/profile'); //abre a comunicação entre a aplicação e a API, os argumentos passados entre parenteses define primeiro o que se deseja passar para o servidor e o segundo o endereço para onde a  requisição será enviada
        
        http.onload = () => {//metodo onload é uma função que ocorre ao executar a pagina
            if(http.status >= 400){
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response));
            };
        }

        http.send(); //envia a requisição
    });
    return promise
}

listaClientes()
.then( data =>{ //método then retorna a promise executando o que estiver entre parenteses
    data.forEach(elemento => { //itera cada elemento da resposta
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)); //exibe os dados dos clientes ta pagina lista_cliente
    }); //response obtem o valor do que o servidor devolveu na requisição
});