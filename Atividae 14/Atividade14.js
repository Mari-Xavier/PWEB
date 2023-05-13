const pesquisa = document.getElementsByName("pesquisa");

function validarDados(){

    if (document.getElementById("nome").value.length < 10) {
        alert("Preencha o nome corretamente!");
        document.getElementById("nome").focus();

        return false;
    }

    if (document.getElementById("mensagem").value.length < 20) {
        alert("Comentário precisa ter pelo menos 20 caracteres!");
        document.getElementById("mensagem").focus();

        return false;
    }

    for(var i = 0; i < pesquisa.length; i++){
        if(pesquisa[i].checked){
            if(pesquisa[i].value == "sim"){
                alert("Seja bem vindo, volte sempre!!!");

                return true;
            }else{
                alert("Obrigado por retornar, espero vê-lo novamente!!!");

                return true;
            }
        }else{
            if(i+1 == pesquisa.length){
                alert("Selecione uma opção para efetuarmos a pesquisa!!!");

                return false;
            }
        }
    }
}

function limpar(){
    document.getElementById("formulario").reset();
}