export function calcDelta(a, b, c){
    return b ** 2 - 4 * a * c;
  }
  
  export function calcBhaskara(a, b, c){
  
    const delta = calcDelta(a,b,c);
    console.log("delta", delta);
  
    if (delta === 0) {
      const x1 = (b * -1) / (2 * a);
      console.log("x1", x1);
    } else if (delta > 0) {
      const x1 = (b * -1 + delta ** 0.5) / (2 * a);
      const x2 = (b * -1 - delta ** 0.5) / (2 * a);
      console.log("x1", x1);
      console.log("x2", x2);
    } else {
      console.log("Error");
    }
  }

  export function calcPitagoras(a: number, b: number, c: number) {
  if (
    (isNaN(a) && isNaN(b)) ||
    (isNaN(a) && isNaN(c)) ||
    (isNaN(b) && isNaN(c))
  ) {
    return { result: "err" };
  } else if (isNaN(a)) {
    a = c + b;
    return { result: a, lado: "A" };
  } else if (isNaN(b)) {
    b = a - c;
    return { result: b, lado: "B" };
  } else {
    c = a - b;
    return { result: c, lado: "C" };
  }
}

export function calc(a: number, op: string, b: number): number {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "x") {
    return a * b;
  } else {
    return a / b;
  }
}

export function operacao(dis: string, operador: string): number {
  if (operador !== "") {
    alert("Somente uma operação é permitida por vez!");
    return NaN;
  }
  const numero = parseFloat(dis);
  if (isNaN(numero)) {
    alert("Selecione ao menos um numero!");
  }
  return numero;
}

export function digitar(visor: string, tecla: string): string {
  return visor + tecla;
}