var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa(name, version) {
        if (version === void 0) { version = 0.1; }
        var _this = this;
        this.getNombre = function () {
            return _this.nombre.toString();
        };
        this.setVersion = function (version) {
            _this.version = version;
        };
        this.nombre = name;
        this.version = version;
    }
    Programa.prototype.setNombre = function (name) {
        this.nombre = name;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa = __decorate([
        arranque('lanzamiento del curso de node js')
    ], Programa);
    return Programa;
}());
var VideoEditor = /** @class */ (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setTimeLine = function (timeline) {
            _this.timeLine = timeline;
        };
        return _this;
    }
    VideoEditor.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    return VideoEditor;
}(Programa));
var programa = new Programa();
programa.lanzamiento();
var programas = [];
function Guardar(e) {
    console.log(e);
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa(nombre);
    programas.push(programa);
    var listado = document.getElementById('listado');
    listado.innerHTML = "";
    console.log(listado);
    for (var _i = 0, programas_1 = programas; _i < programas_1.length; _i++) {
        var programa_1 = programas_1[_i];
        var li = document.createElement("LI");
        var text = document.createTextNode(programa_1.getNombre());
        li.appendChild(text);
        listado.appendChild(li);
    }
}
