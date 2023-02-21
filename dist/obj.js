"use strict";
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let inputValue = input.value;
for (let button of Array.from(buttons)) {
    button.addEventListener("click", (event) => {
        let btnInputs = event.target.innerText;
        function calFeatures(btnInput) {
            let calculator = {
                X: () => "*",
                "÷": () => "/",
                mod: () => "%",
                xy: () => "**",
                C: () => (btnInput = ""),
                "⌫": () => inputValue.substring(0, inputValue.length - 1),
                π: () => +inputValue * Math.PI,
                e: () => +inputValue * Math.E,
                x2: () => Math.pow(+inputValue, 2),
                "10x": () => Math.pow(10, Number(inputValue)),
                ln: () => Math.log(Number(inputValue)),
                log: () => Math.log10(Number(inputValue)),
                "√x": () => Math.sqrt(Number(inputValue)),
                "3√x": () => Math.cbrt(Number(inputValue)),
                "|x|": () => Math.abs(Number(inputValue)),
                Sin: () => Math.sin(Number(inputValue)),
                Tan: () => Math.tan(Number(inputValue)),
                Cos: () => Math.cos(Number(inputValue)),
                exp: () => Math.exp(Number(inputValue)),
                "+/-": () => Number(inputValue) * -1,
                "1/x": () => 1 / Number(inputValue),
                "n!": () => {
                    let f = 1;
                    for (let i = 1; i <= +inputValue; i++) {
                        f *= i;
                    }
                    return (inputValue = f.toString());
                },
                "=": () => eval(inputValue),
            };
            return typeof calculator[btnInput] == "function"
                ? calculator[btnInput]()
                : btnInput;
        }
        let checkBtn = ["+", "-", "X", "÷", "mod", "xy"];
        inputValue = checkBtn.includes(btnInputs)
            ? inputValue + calFeatures(btnInputs)
            : calFeatures(btnInputs);
    });
}
//# sourceMappingURL=obj.js.map