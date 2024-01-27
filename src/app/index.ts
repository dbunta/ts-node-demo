import fs from "fs";

console.log(123);
const addNumber = (a: number, b: number) => {
    return a + b;
}
console.log(345);
fs.writeFileSync("test.txt", "test");

addNumber(1,2);

export function dosomething() {
    alert("test");
}

