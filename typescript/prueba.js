function holaMundo(nombre) {
    return "hola mundo: " + nombre;
}
var etiqueta = document.getElementById("container");
// variables y tipos
var nombre = "Chuvakovich";
var edad = 28;
var developer = true;
var langs = ["js", "css", "html", "php"];
etiqueta.innerHTML = nombre + " - " + edad;
// Funciones y tipado.
function devuelveNumero(num) {
    return String(num);
}
alert(devuelveNumero(5));
