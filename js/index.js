class Calculator {
  constructor() {
    this.value = 0;
    this.opretaions = "0";
  }
  add(value) {
    this.value += value;
    this.opretaions = "(" + this.opretaions + ")" + "+" + value;
  }
  sub(value) {
    this.value -= value;
    this.opretaions = "(" + this.opretaions + ")" + "-" + value;
  }
  div(value) {
    this.value /= value;
    this.opretaions = "(" + this.opretaions + ")" + "/" + value;
  }
  mul(value) {
    this.value *= value;
    this.opretaions = "(" + this.opretaions + ")" + "*" + value;
  }
  getValue() {
    return this.value;
  }
  getOpertions() {
    return this.opretaions + " = " + this.value;
  }
}

let calculator = new Calculator();
function Menu() {
  let operation = parseInt(
    prompt(`
    Digite una orepacion
    1. sumar
    2. restar
    3. dividir
    4. multiplicar
    5.salir
    `)
  );
  if (operation < 5) {
    let value = prompt("Digite el value valor a operar");
    switch (operation) {
      case 1:
        calculator.add(value);
        break;
      case 2:
        calculator.sub(value);
        break;
      case 3:
        calculator.div(value);
        break;
      case 4:
        calculator.mul(value);
        break;
    }
    alert("El resultado es : " + calculator.getOpertions());
    let exit = confirm("Desea salir");
    if (exit) {
      return;
    } else {
      Menu();
    }
  }
}
Menu();
