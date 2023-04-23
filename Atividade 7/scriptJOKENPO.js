alert("J-O-K-E-N----P-Ô\n\nQue comecem os jogos!!!")
rodada = prompt("Escolha sua munição: \nPEDRA, PAPEL ou TESOURA?").toUpperCase();
if (rodada =="PEDRA"){
    municao = 0;
}
if (rodada =="PAPEL"){
    municao = 1;
}
if (rodada =="TESOURA"){
    municao = 2;
}


alert("Legal, boa escolha.") 
rodadacomp = Math.round((Math.random(0,3)))
if(rodadacomp == 0){
    alert("Você escolheu: " + rodada + "\n\nO computador escolheu: PEDRA")
}
if(rodadacomp == 1){
    alert("Você escolheu: " + rodada + "\n\nO computador escolheu: PAPEL")
}
if(rodadacomp == 2){
    alert("Você escolheu: " + rodada + "\n\nO computador escolheu: TESOURA")
}



if((rodadacomp == 0 && municao == 0) || (rodadacomp == 1 && municao == 1) || (rodadacomp == 2 && municao == 2)){
    alert("Eita, empatou! \n\nTente novamente.")
}
if((rodadacomp == 0 && municao == 2) || (rodadacomp == 2 && municao == 0)){
    alert("PEDRA quebra TESOURA.")
}
if((rodadacomp == 2 && municao == 1) || (rodadacomp == 1 && municao == 2)){
    alert("TESOURA corta PAPEL.")
}
if((rodadacomp == 1 && municao == 0) || (rodadacomp == 0 && municao == 1)){
    alert("PAPEL cobre PEDRA.")
}


if(rodadacomp == 0 && municao == 2 || rodadacomp == 2 && municao == 1 || rodadacomp == 1 && municao == 0){
    alert("NÃO FOI DESTA VEZ... TENTE  NOVAMENTE!")
}
if(rodadacomp == 2 && municao == 0 || rodadacomp == 1 && municao == 2 || rodadacomp == 0 && municao == 1){
    alert("VOCÊ É O VENCEDOR! PARABÉNS!!!")
}
