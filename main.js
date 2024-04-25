let nomeUsuásio = "";
let elemento = document.querySelector("#nomeUsuário");

while(nomeUsuário == ""){
    nomeUsuásio = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja muito bem-vindo";
}else{
    elemento.textContent = nomeUsuásio;
}
