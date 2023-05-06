function janelaFechada(obj){
    obj.src="janelafechada.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Janela fechada";
}

function janelaAberta(obj){
    obj.src="janelaaberta.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Janela aberta";
}

function janelaQuebrada(obj){
    obj.src="janelaquebra.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Ôh não, você quebrou!";
}