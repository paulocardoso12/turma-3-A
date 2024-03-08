const botoes = document.querySlectorA11(".botao");

for(let i=0;i <botoes.length;1++){
    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo");
    }
    console.log();
}