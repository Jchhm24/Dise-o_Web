//  Uso de método get ElementById y de la propiedad innerHTML

// A)
document.getElementById("demo").innerHTML="Hola Mundo!";

// B)
let elemento= document.getElementById("intro");

// C)
document.getElementById("p1").innerHTML="¡Nuevo Texto!";

//D)
elemento=document.getElementById("titulo");
elemento.innerHTML="Nuevo Encabezado"

/***** Búsqueda de elementos HTML por nombre de etiqueta. *****/

//A)
element=document.getElementsByName("p");

//B)
let x=document.getElementById("main");
console.log(x);

let y=document.getElementById("p");
console.log(y);
//Descomente el codigo de abajo y abra consola para ver lo que pasa
// x.innerHTML="relleno"

/****** Encontrar elementos por nombre de clases.   *****/

// A)
x=document.getElementsByClassName("intro");
console.log(x);

// Búsqueda de elementos HTML mediante selectores de CSS

// A)
x=document.querySelectorAll("p.intro");
console.log(x);

// B)
const listItems=document.querySelectorAll("ul > li");
console.log(listItems);

// C)
const h1Element=document.querySelectorAll("h1");
console.log(h1Element);

//D)
const list=document.querySelectorAll(".list");
console.log(list);

// E)
const listaDeElementos=document.querySelectorAll("ul > li");
let cantidad=1;
listaDeElementos.forEach((item) => {
    console.log("Numero de elemento: "+cantidad++);
    console.log(item );
});

// F)
const h1=document.querySelector("h1");
h1.style.color="blue";

// Búsqueda de elementos HTML por colecciones de objetos HTML.
// A)
x=document.forms["form1"];
let texto="";
for(let i=0; i < x.lenght; i++){
    texto +=x.elements[i].value + "<br>";
}

document.getElementById("demo").innerHTML=texto;
console.log(x)

// Agregar nuevos elementos al documento HTML
// A)
let lista= document.createElement("ul");
document.body.appendChild(lista);

let elemento1=document.createElement("li");
elemento1.textContent="Flor";
lista.appendChild(elemento1);

let elemento2=document.createElement("li");
elemento2.textContent="Jaguar";
lista.appendChild(elemento2);

console.log(lista);

// Usando el método addEventListener() para escuchar eventos en la página
// A)   
const button= document.getElementById("btn");
button.addEventListener("click",()=>{
    alert("Gracias por dar Click");
});

//  Validación de formulario
// A)
function validarFormulario() {
    let x=document.forms["miFormulario"]["nombre"].value;
    if(x===""){
        alert("Se debe completar el nombre");
        return false;
    }
}

// B) Formulario numerico
function miFunction(){
    let x=document.getElementById("numero").value;
    let texto;
    if(isNaN(x) ||x < 1|| x >10){
        texto="Entrada no válida";
    }else{
        texto="Entrada correcta";
    }
    document.getElementById("DEMO").innerHTML=texto;
}

// Cambiar el valor de un atributo
// A)
document.getElementById("miImagen").src="cerezos.jpg"

// Contenido dinámico
// A)
document.getElementById("Demo").innerHTML="Fecha: "+Date();