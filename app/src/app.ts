import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('form') as HTMLFormElement;
if(form){
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona(); 
 })
}else{
    throw new Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const botaoImporta = document.querySelector('#botao-importa') as HTMLButtonElement;
if(botaoImporta){
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    })
}else{
    throw new Error('Botão Importa não foi encontrado.');
}