export const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json(); //o método .json() faz a resposta ser convertida para um Objeto JS valido
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
        return resposta.body;
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
}

const detalheCliente = (id) => { //pega os dadis de um cliente especifico que estiver sendo editado
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
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
        return resposta.json()
    })
}

export const clienteService = { //define um objeto que recebe o listaClientes, dessa forma ao acessar no listaClientes-controller essa função será necessário usar a notação ponto
    listaClientes,
    criaCliente,
    removeCliente,
    detalheCliente,
    atualizaCliente
}