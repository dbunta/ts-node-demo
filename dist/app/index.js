"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dosomething = void 0;
var fs_1 = __importDefault(require("fs"));
console.log(123);
var addNumber = function (a, b) {
    return a + b;
};
console.log(345);
fs_1.default.writeFileSync("test.txt", "test");
addNumber(1, 2);
function dosomething() {
    alert("test");
}
exports.dosomething = dosomething;
//# sourceMappingURL=index.js.map