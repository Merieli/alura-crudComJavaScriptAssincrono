export const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json(); //o método .json() faz a resposta ser convertida para um Objeto JS valido
    })
}

export const clienteService = { //define um objeto que recebe o listaClientes, dessa forma ao acessar no listaClientes-controller essa função será necessário usar a notação ponto
    listaClientes
}