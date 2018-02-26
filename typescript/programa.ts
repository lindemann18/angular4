function arranque(lanzar:string) {
  return function (target:Function) {
    target.prototype.lanzamiento = function():void {
      alert(lanzar);
    }
  }
}



interface ProgramaBase {
    setNombre();
    getNombre():string;
}
@arranque('lanzamiento del curso de node js')

class Programa {
  public nombre:string;
  public version:number;

  constructor(name, version=0.1) {
      this.nombre = name;
      this.version = version;
  }

  public setNombre(name) {
    this.nombre = name;
  }

  public getNombre = ()=> {
    return this.nombre.toString();
  }

  public setVersion = version=> {
    this.version = version;
  }

  public getVersion() {
    return this.version;
  }
}

class VideoEditor extends Programa {
  public timeLine:number;

  public setTimeLine = timeline => {
    this.timeLine = timeline;
  }

  public getTimeLine() {
    return this.timeLine;
  }
}


let programa = new Programa();
programa.lanzamiento();

  let programas:Array<any> = [];

    function Guardar(e) {
      console.log(e);
      var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
      var programa = new Programa(nombre);
      programas.push(programa);
      let listado = <HTMLElement> document.getElementById('listado');
      listado.innerHTML = "";
      console.log(listado);
      for(let programa of programas) {
        let li = document.createElement("LI");
        let text = document.createTextNode(programa.getNombre());
        li.appendChild(text);
        listado.appendChild(li);
      }
  }
