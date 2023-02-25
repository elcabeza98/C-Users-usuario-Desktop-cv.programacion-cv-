//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarocultarmenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }    
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a")
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barritas de una barra partucular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className ="e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barra generales para luego manipularlas 
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienza en -1 porque no tiene ningun pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
let entro =false;

function efectohabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalhtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalhtml);
        },100);
        const intervaljavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervaljavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 15, 4, intervalPhp);
        },100);
        const intervalilustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 5, intervalilustrator);
        },100);
    }
}

//lleno una barra particular con la cantida dindicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElemnetsByClassName("e");
        elementos[x].style.backgroundcolor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mause para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}