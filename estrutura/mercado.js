const Fila = (_saidaFila) => {
    let dados = [];
    let saidaFila = _saidaFila;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const tamanhoFila = () => dados.length;
    const filaVazia = () => dados.length < 1;
    const desenfileirar = () => {
        let retirado = null;
        if (!filaVazia()){
            retirado = dados[0];
            dados.splice(0,1);
            imprimir();
        }
        return retirado;
    }
    const imprimir = () => {
        let dadosSaida = "";
        for(let i=0; i < tamanhoFila(); i++){
            dadosSaida += "["+dados[i].id + "("+dados[i].itens+")] ";
        }
        document.getElementById(saidaFila).innerHTML = dadosSaida;
    }
    return {enfileirar,desenfileirar}
}

    const f1 = Fila("saidaFila1");
    const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
    const Cliente = (_id,_itens) =>{
        return {
            id:_id,
            itens:_itens
        }
    }
    const caixa1ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            tempo = cliente.itens * 100;
            setTimeout(caixa1ChamaProximo,tempo);
        }
    } 
    (function(){
        for(let i=1; i <= 15; i++){
            f1.enfileirar(Cliente("C"+i,gerarItens()));
        }
        caixa1ChamaProximo();
    })();