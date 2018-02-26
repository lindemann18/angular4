var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        if (modelo) {
            this.modelo = modelo;
        }
        else {
            this.modelo = "generic";
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function (aumento) {
        if (aumento === void 0) { aumento = 1; }
        this.velocidad = aumento;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getSpeed = function () {
        return this.velocidad;
    };
    Coche.prototype.returnModel = function () {
        return this.modelo;
    };
    Coche.prototype.setModel = function (model) {
        this.modelo = model;
    };
    return Coche;
}());
var coche = new Coche("Avenger");
coche.setColor("black");
coche.acelerar(25);
coche.frenar();
console.log("velocidad: " + coche.getSpeed());
console.log(coche.getColor());
console.log(coche.returnModel());
