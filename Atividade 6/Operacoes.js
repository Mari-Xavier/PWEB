function operacoes()
{


    let n1 = prompt("Digite o primeiro numero: ");
    let n2 = prompt("Dgite o segundo numero: ");

    return "Soma dos dois: " + (parseFloat(n1) + parseFloat(n2)) + "\n" +
           "Subtração do primeiro pelo segundo: " + (parseFloat(n1) - parseFloat(n2)) + "\n" +
           "Produto dos dois: " + (parseFloat(n1) * parseFloat(n2)) + "\n" +
           "Divisao do primeiro pelo segundo: " + (parseFloat(n1) / parseFloat(n2)) + "\n" +
           "Resto da divisao do primeiro pelo segundo: " + (parseFloat(n1) % parseFloat(n2));

}

alert(operacoes());