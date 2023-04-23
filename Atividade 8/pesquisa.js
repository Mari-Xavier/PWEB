var contador = 0;
var array = [];
var qtdeHomens = 0;
var qtdeMulheres = 0;

function onClick() { // botão enviar
    var idade = document.getElementById("idade").value;//<!--traga o valor
    var sexo = document.getElementById("sexo").value;
    var opiniao = document.getElementById("opiniao").value;
    var respostas = {
        idade: parseInt(idade),
        sexo: sexo,
        opiniao: parseInt(opiniao)
    };

    array.push(respostas);//pega o valor e coloca na array

    if(sexo=="Male"){
        qtdeHomens += 1;
    }
    else{
        qtdeMulheres += 1;
    }

    console.log(idade);//imprime, testar até onde chega o código, para ver se tem erro, vai testando o código
    alert("Muito obrigada! \nSua opinião é importante para a pesquisa.")
    contador += 1; //

    if (contador === 3) {
        console.log("chegou aqui")
        results();
    }
    document.getElementById("idade").value="";
}
function results() {
    calcMedia();
    maisVelha();
    maisNova();
    contPessimo();
    porcentOtimoBom();
    respostasGenero();
}

function calcMedia() {
    var somaIdade = 0;
    array.map((e) => {// map varre minha estrutura, e indico quem eu quero que ele traga--arrow function pesquisar depois
        somaIdade += e.idade;
    })
    var avg = somaIdade / array.length;
    var avgRound = Math.round(avg);
    alert("A média da idade dos participantes foi: " + avgRound);
}

function maisVelha() {
    var maiorIdade = array.map((e) => e.idade).sort()[array.length - 1] //sort ordena para ordem crescente
    alert("A pessoa mais velha tem " + maiorIdade + " anos.");
}

function maisNova() {
    var menorIdade = array.map((e) => e.idade).sort()[0]
    alert("A pessoa mais nova tem " + menorIdade + " anos.");
}

function contPessimo() {
    var opinPessimo = 0;
    array.forEach((e) => {//para cada elemento do array ele faz 
        if (e.opiniao == 1) {
            opinPessimo += 1;
        }
    });

    alert(opinPessimo + " pessoa(s) respondeu/responderam péssimo.")
}

function porcentOtimoBom() {
    var opinOtimoBom = 0;

    array.forEach(e => {
        if (e.opiniao == 3 || e.opiniao == 4) {
            opinOtimoBom += 1;
        }
    });
    var porcentidade = (opinOtimoBom * 100) / array.length

    alert(porcentidade.toFixed(2) + "%" + " equivale ao percentual de respostas ótimas e boas.");
}

function respostasGenero() {
    alert("\nQuantidade de homens que responderam a pesquisa: " + qtdeHomens + 
    "\n\nQuantidade de mulheres que responderam a pesquisa: " + qtdeMulheres);

}

