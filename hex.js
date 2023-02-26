//const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//const btn = document.getElementById("btn");
//const color = document.querySelector(".color");
//
//btn.addEventListener('click', function() {
//let hexColor = '#';
//for(let i = 0; i < 6; i++){
//    hexColor += hex[getRandomNumber()]
//}
//color.textContent = hexColor;
//document.body.style.backgroundColor = hexColor;
//})
//function getRandomNumber(){
//    return Math.floor(Math.random() * hex.length)
//}


//JavaScript para generar un número aleatorio hexadecimal, los valores del número hexadecimal se obtienen de una lista de caracteres, caracteres que pueden conformar un número hexadecimal
//Un numero hexadecimal contiene números del 0 al 9 y letras de la "A" a la "F"

//Definimos la variable, en este caso el valor de la variable es una lista de caracteres, const hexadecimales = [];
const hexadecimales = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//Definimos una variable que apunta al botón mediante su id, se necesita para asignarle un evento, y la función que tendra este evento.
const boton = document.getElementById("btn");
//Definimos una variable, que apunta al elemento con clase .color, donde se mostrara el número hexadecimal generado
const codigo = document.querySelector(".color");

//Una vez definidas las variables, creamos las funciones, en este caso son 2.
//La primera función se ejecuta cuando hacemos clic en el botón, esta función recorre la lista hexadecimales 6 veces, porque un número hexadecimal contiene 6 caracteres

//Se le asigna al botón un evento de click, al hacer click se ejecuta una función
boton.addEventListener('click', function() {
    //Creamos una variable que contiene "#", este simbolo va siempre delante del número generado aleatoriamente
    let simboloHex = "#";
    //Recorremos la lista 6 veces
    for(let i = 0; i < 6; i++){
        //Al simbolo "#"" le añadimos "+=" los caracteres generados aleatoriamente, en este caso, obtenidos de la lista hexadecimales[], [] apunta al indice, generado aleatoriamente mediante la función que contiene, en este caso obtenerNumeroAleatorioIntegro()
        simboloHex += hexadecimales[obtenerNumeroAleatorioIntegro()]
    }
    //Una vez la función ha generado el número hexadeciamal, compuesto de # + 6 caracteres, se lo asignamos a la variable codigo mediante el metodo .textContent
    codigo.textContent = simboloHex;
    //Aplicamos mediante la variable simboloHex(que contiene el número aleatorio generado con la función anterior) el número hexadeciaml generado al estilo del elemento, en este caso el background del body
    document.body.style.backgroundColor = simboloHex;
})

//Esta función nos genera un número aleatorio, que sirve para apuntar al índice de la lista, para cuando el bucle for la recorra 6 veces, tenga número aleatorio
//Declaramos la función
function obtenerNumeroAleatorioIntegro() {
    //Utilizamos la función Math.random() para generar un número aleatorio, como queremos que este número sea entero y no decimal, lo redondeamos a la baja con la función Math.floor().
    //Por defecto, la función Math.random(), genera un número del 0 al 1, asi que lo multiplicamos por la longitud de la lista para obtener un número del 0 a lo que es la longitud de la lista, para poderla recorer entera.
    return Math.floor(Math.random() * hexadecimales.length)
}