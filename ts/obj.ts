const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("button");
const input: HTMLInputElement | null = document.querySelector("input");

interface IButtons {
  [key: string]: Function;
  X: () => string;
  "÷": () => string;
  mod: () => string;
  xy: () => string;
  C: () => void;
  "⌫": () => any;
  π: () => number;
  e: () => number;
  x2: () => number;
  "10x": () => number;
  ln: () => number;
  log: () => number;
  "√x": () => number;
  "3√x": () => number;
  "|x|": () => number;
  Sin: () => number;
  Tan: () => number;
  Cos: () => number;
  exp: () => number;
  "+/-": () => number;
  "1/x": () => number;
  "n!": () => any;
  "=": () => number;
}

let inputValue = input!.value;

for (let button of Array.from(buttons)) {
  button.addEventListener("click", (event: MouseEvent) => {
    let btnInputs = (event.target as HTMLElement).innerText;
    function calFeatures(btnInput: string) {
      let calculator: IButtons = {
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
    let checkBtn: string[] = ["+", "-", "X", "÷", "mod", "xy"];
    inputValue = checkBtn.includes(btnInputs)
      ? inputValue + calFeatures(btnInputs)
      : calFeatures(btnInputs);
  });
}
