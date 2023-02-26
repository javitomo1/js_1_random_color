//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//const btn = document.getElementById("btn");
//const color = document.querySelector(".color");
//
//btn.addEventListener('click', function() {
//    const randomNumber = getRandomNumber();
//    //console.log(randomNumber);
//
//    document.body.style.backgroundColor = colors[randomNumber];
//    color.textContent = colors[randomNumber];
//});
//function getRandomNumber() {
//    return Math.floor(Math.random() * colors.length);
//}
//****************************************************************************************
//JavaScript para generar un color aleatorio a partir de una lista predefinida.

//Definimos la lista, const colores = ["color", "color", etc...]
const colores = ["green", "red", "blue", "yellow", "pink", "white", "black", "purple", "orange", "cian", "aqua"];
//Definimos una variable para apuntar al botón donde haremos click, const boton = document.getElementById("btn");
const boton = document.getElementById("btn");
//Definimos otra variable que apunta al elemento donde queremos mostrar el nombre del color, const codigo = document.querrySelector(".color");
const codigo = document.querySelector(".color");

//Ahora que tenemos la lista de colores, el botón que cambiara de un color a otro y el elemento que mostrara el nombre del color, pasamos a definir las funciones.
//Necesitamos dos funciones, una hace que cambie el color de fondo y muestre en un elemento el nombre del color aplicado.
//La otra función que necesitamos, genera un número aleatorio que no es más largo que la lista definida anteriormente.

// Primera función
// Cuando hacemos clic en el botón, se ejecuta la función
boton.addEventListener('click', function() {
    // Creamos una variable que apunte a la función que genera el número aleatorio
    const numeroAleatorio = numeroAleatorioIntegro();

    //Aplicamos el color de fondo mediante la variable y su índice, generado por la función que genera el número aleatorio
    document.body.style.backgroundColor = colores[numeroAleatorio];
    //Cambiamos el texto del elemento mediante la variable y su índice
    codigo.textContent = colores[numeroAleatorio];
})

//Función que genera un número integro aleatorio del 0 a la longitud máxima de la lista
function numeroAleatorioIntegro() {
    //Le aplicamos Math.floor() para redondear el número aleatorio a la baja que genera el Math.random() y lo multiplicamos por la longitud de la lista a un número íntegro
    return Math.floor(Math.random() * colores.length)
}

