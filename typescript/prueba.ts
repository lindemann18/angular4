function holaMundo(nombre){
  return "hola mundo: "+nombre;
}

const etiqueta = <HTMLElement>document.getElementById("container");

// variables y tipos
let nombre:string = "Chuvakovich";
let edad:number   = 28;
let developer:boolean = true;
let langs: Array<string> = ["js","css","html","php"];
etiqueta.innerHTML = nombre+" - "+edad;


// Funciones y tipado.

function devuelveNumero(num:number):string {
  return String(num);
}

alert(devuelveNumero(5));
