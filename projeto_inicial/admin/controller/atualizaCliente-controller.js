import { clienteService } from "../service/cliente-service.js";

( async ()=> { //funcao asincrona
    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get('id'); //Por meio da propriedade searchParams é possível acessar o método get e selecionar o id 

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try{
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome,
        inputEmail.value = dados.email
    } 
    catch(erro){
        console.error(erro);
        window.location.href = '../telas/erro.html';
    };

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html" //quando a promisse for resolvida ele será redicionado diretamente para a url
        } 
        catch(erro){
            console.error(erro);
            window.location.href = '../telas/erro.html';
        }   
        
    })
})();