"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 8000;
app.use(express_1.default.static(path_1.default.join(__dirname, "app")));
app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "app", "index.html"))
    res.sendFile(path_1.default.join(__dirname, "app/index.html"));
    // Res.send("Hello World");
    // const pathName2 = path.join(__dirname, "/app", "/index.html");
    // res.sendFile(pathName2);
    // res.sendFile(__dirname + 'app/index.html');
});
app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
//# sourceMappingURL=server.js.map