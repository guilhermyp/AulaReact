// REGRAS PARA CRIAÇÃO DE UM NOVO COMPONENTE
// 1 - A PRIMEIRA LETRA DO COMPONENTE DEVE SER MAIUSCULA
// 2 - O COMPONENTE DEVE SER UMA FUNÇÃO
// 3 - O COMPONENTE DEVE RETORNAR APENAS UM ELEMENTO HTML
// 4 - DEVE EXPORTAR O COMPONENTE

import { useEffect } from "react";

function ConsultarCep(){
    
    useEffect(() => {
    //EVENTO DE CARREGAMENTO DO COMPONENTE
    //EXECUTAR CODIGO AO ABRIR CARREGAR O COMPONENTE
    // AXIOS - BIBLIOTECA DE REQUISIÇÕES

    fetch("https://viacep.com.br/ws/01001000/json/")
    .then(resposta => {
        return resposta.json();
    })
    .then(endereco =>{
        console.log(endereco);
    });
});
    
    return(
        <div>
        <h1>Consultar Cep</h1>
        </div>
    );
}

export default ConsultarCep;


//EXERCICIOS

//1 - EXIBIR OS DADOS NO HTML/PÁGINA
//2 - REALIZAR A REQUISIÇÃO PARA A SUA API
//3 - RESOLVER O PROBLEMA DE CORS
//4 - EXIBIR A LISTA DE PRODUTOS NO HTML
