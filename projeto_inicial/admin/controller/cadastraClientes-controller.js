import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault() //prevenindo o comportamento padrao dpo formulario de enviar as informaçoes sem checar, para que antes disso ele busque o nome e email nos comandos abaixo

    try{
        const nome = evento.target.querySelector('[data-nome]').value;
        const email = evento.target.querySelector('[data-email]').value;

        await clienteService.criaCliente(nome, email);
        window.location.href = '../telas/cadastro_concluido.html'//pega a janela atual e location onde está no momento atual e seleciona o caminho de envio definindo que será para o endereço que está entre aspas
    }
    catch(e){
        console.error(e);
        window.location.href = '../telas/erro.html';
    }
})