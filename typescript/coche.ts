interface CocheBase {
  getModelo():string;
  getSpeed():number;
}
class Coche {
  public color: string;
  public modelo: string;
  public velocidad: number;

  constructor(modelo = null) {
    this.velocidad = 0;
    if(modelo) {
        this.modelo = modelo;
    } else {
      this.modelo = "generic";
    }

  }

  public getModelo():string {
    return this.modelo;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color) {
    this.color = color;
  }

  public acelerar(aumento:number = 1) {
    this.velocidad = aumento;
  }

  public frenar() {
    this.velocidad--;
  }

  public getSpeed() {
    return this.velocidad;
  }

  public returnModel() {
    return this.modelo;
  }

  public setModel(model:string) {
    this.modelo = model;
  }
}

let coche = new Coche("Avenger");

coche.setColor("black");
coche.acelerar(25);
coche.frenar();
console.log("velocidad: "+coche.getSpeed());
console.log(coche.getColor());
console.log(coche.returnModel());
