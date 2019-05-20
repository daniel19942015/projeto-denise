let showEffect = element =>{

    element.style.display = "block";

}

let closeEffect = element =>{

    element.style.display = "none";

}

const botao_abrir = document.querySelector("#abrir-info-menu");
const botao_fechar = document.querySelector("#fechar-info-menu");
const expandir_janela = document.querySelectorAll("#info-menu nav ul a li");
const fechar_janela = document.querySelectorAll(".abrir-menu");

botao_abrir.addEventListener("click", function(){

    document.querySelector("#info-menu").classList.add("bounceInDown");
    showEffect(document.querySelector("#info-menu"));

});


botao_fechar.addEventListener("click", function(){

    closeEffect(document.querySelector("#info-menu"));

});

for(let i = 0; i <= expandir_janela.length; i++){

    expandir_janela[i].onclick = (state) =>{
        
        expandir_janela[i].classList.add("expandir");
        console.log(state, auxiliar);

    }
}


