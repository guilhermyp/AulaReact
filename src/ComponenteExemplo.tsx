// REGRAS PARA CRIAÇÃO DE UM NOVO COMPONENTE
// 1 - A PRIMEIRA LETRA DO COMPONENTE DEVE SER MAIUSCULA
// 2 - O COMPONENTE DEVE SER UMA FUNÇÃO
// 3 - O COMPONENTE DEVE RETORNAR APENAS UM ELEMENTO HTML
// 4 - DEVE EXPORTAR O COMPONENTE

function ComponenteExemplo(){
    return(
        <div>
        <h1>Primento post</h1>
        <p>TEXTO DE TESTE</p>
        </div>
    );
}

export default ComponenteExemplo;