export const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();//o método .json() faz a resposta ser convertida para um Objeto JS valido
        }
        throw new Error('Não foi possível listar os clientes');
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method : 'POST', //lista o que for inserido
        headers: {//tipo de informação para o cabeçalho
            'Content-Type' : 'application/json' //a informação enviada é do tipo application/json
        },
        body: JSON.stringify({ //em body, que é o corpo da requisição vão os dados que serão preenchidos no formulário
            nome: nome, 
            email: email
        })//a comunicação cliente-servidor é feita em texto por isso é preciso converte-lo em um JS valido com o JSON.stringify()
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body;
        }
        throw new Error('Não foi possível criar um cliente');
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um cliente');
        }
    })
}

const detalhaCliente = (id) => { //pega os dadis de um cliente especifico que estiver sendo editado
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente');
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o cliente');
    })
}

export const clienteService = { //define um objeto que recebe o listaClientes, dessa forma ao acessar no listaClientes-controller essa função será necessário usar a notação ponto
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}