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
let auxiliar = 0;

botao_abrir.addEventListener("click", function(){

    document.querySelector("#info-menu").classList.add("animation");
    showEffect(document.querySelector("#info-menu"));

});


botao_fechar.addEventListener("click", function(){

    closeEffect(document.querySelector("#info-menu"));


});

for(let i = 0; i <= expandir_janela.length; i++){
            
            expandir_janela[i].onclick = () =>{ 
                
                expandir_janela[i].classList.add("expandir");
                expandir_janela[i].classList.add("animations");

                expandir_janela[i].onclick = () =>{

                    expandir_janela[i].classList.remove("expandir");
                    expandir_janela[i].classList.remove("animations");
                }   
            }
        
    }


