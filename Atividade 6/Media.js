function mediaAluno()
{
    let aluno, n1, n2, n3, media;

    aluno = prompt("Digite o nome do aluno: ");
    n1 = prompt("Digite a primeira nota do aluno: ");
    n2 = prompt("Digite a segunda nota do aluno: ");
    n3 = prompt("Digite a terceira nota do aluno: ");

    mediaAluno = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    
    return "Média do aluno " + aluno + ": " + mediaAluno.toFixed(2);
}

alert(mediaAluno());

