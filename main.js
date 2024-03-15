const botoes = document.querySelectorAll(".botao");

for(let i=0;i <  botões.length; i++){
    botoes[i]. onclick = function(){
        botoes[i].classlist.add("ativo");
    }
    console.log(i);
}
