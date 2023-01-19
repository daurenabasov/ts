var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return console.log("[".concat(name, "]: Typescript version is ").concat(this.version));
    };
    return Typescript;
}());
