function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy"
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}
function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(setReplace("vai Japão", "Japão", "Brasil"));
alert(soma(5, 10));*/


//var d = new Date();
//alert(d.getMonth()+1);


/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}*/


/*var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}*/


/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/


//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[0].nome);


/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista[1]);
//lista.push("uva");
//lista.pop();
//alert(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "Rafael Albano";
//var idade = 27;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " Tem " + idade + " anos ");
//console.log("teste de console")
//console.log(frase.replace("Japão", "Brasil"));