let fila_unica = null;

function criarFila(){
    fila_unica = [];
    document.getElementById("fila").innerHTML = "Fila vazia";
}
function removerElementoFila(){

}
function inserirElementoFila(){
    let nome = document.getElementById("nome").value;
    if(fila_unica != null){
        fila_unica.push(nome);
    }
    let saida = "";
    for(let i=0; i < fila_unica.length - 1; i++){
        saida = fila_unica[i] + "<- ";
    }
    saida += fila_unica[fila_unica.length - 1]

    document.getElementById("fila").innerHTML = saida;
}
function verPrimeiroFila(){

}
function removerFila(){
    fila_unica = null;
    document.getElementById("fila").innerHTML = "Não existe fila. Clique em criar.";
}