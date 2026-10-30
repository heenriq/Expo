import { describe, expect, test } from "@jest/globals";
import {
  calcDelta,
  calcPitagoras,
  calc,
  digitar,
  operacao,
} from "../src/components/calculators";

describe("Bhaskara", () => {
  test("Delta negativo", () => {
    // Dado / Arrange
    const a = 1;
    const b = 1;
    const c = 1;
    // Quando / Act
    const resultado = calcDelta(a, b, c);

    // Então / Assert
    expect(resultado).toBeLessThan(0);
  });
  test("Delta zerado", () => {
    // Dado / Arrange
    const a = 1;
    const b = 2;
    const c = 1;
    // Quando / Act
    const resultado = calcDelta(a, b, c);

    // Então / Assert
    expect(resultado).toBe(0);
  });
});

describe("Pitágoras", () => {
  test("Calcula A (a² = b² + c²)", () => {
    const resultado = calcPitagoras(NaN, 3, 4);
    expect(resultado.result).toBe(7);
    expect(resultado.lado).toBe("A");
  });

  test("Calcula B (b² = a² - c²)", () => {
    const resultado = calcPitagoras(5, NaN, 4);
    expect(resultado.result).toBe(1);
    expect(resultado.lado).toBe("B");
  });

  test("Calcula C (c² = a² - b²)", () => {
    const resultado = calcPitagoras(5, 3, NaN);
    expect(resultado.result).toBe(2);
    expect(resultado.lado).toBe("C");
  });

  test("Erro quando faltam dois lados", () => {
    expect(calcPitagoras(NaN, NaN, 4).result).toBe("err");
    expect(calcPitagoras(NaN, 3, NaN).result).toBe("err");
    expect(calcPitagoras(5, NaN, NaN).result).toBe("err");
  });

  test("Erro quando nenhum lado é informado", () => {
    expect(calcPitagoras(NaN, NaN, NaN).result).toBe("err");
  });
});

describe("calc", () => {
  test("Soma", () => {
    // Dado / Arrange
    const a = 2;
    const b = 3;
    // Quando / Act
    const resultado = calc(a, "+", b);
    // Então / Assert
    expect(resultado).toBe(5);
  });

  test("Subtração", () => {
    expect(calc(5, "-", 3)).toBe(2);
  });

  test("Subtração com resultado negativo", () => {
    expect(calc(3, "-", 5)).toBe(-2);
  });

  test("Multiplicação", () => {
    expect(calc(4, "x", 3)).toBe(12);
  });

  test("Divisão", () => {
    expect(calc(10, "/", 4)).toBe(2.5);
  });

  test("Divisão por zero retorna Infinity", () => {
    expect(calc(5, "/", 0)).toBe(Infinity);
  });

  test("Zero dividido por zero retorna NaN", () => {
    expect(calc(0, "/", 0)).toBeNaN();
  });

  test("Decimais (usa toBeCloseTo por causa do ponto flutuante)", () => {
    expect(calc(0.1, "+", 0.2)).toBeCloseTo(0.3, 5);
  });

  test("Operador desconhecido cai na divisão", () => {
    // documenta o comportamento atual do else
    expect(calc(8, "?", 2)).toBe(4);
  });
});

describe("operacao", () => {
  beforeEach(() => {
    (globalThis as any).alert = jest.fn();
  });

  test("Converte o visor em número quando não há operador", () => {
    const resultado = operacao("42", "");
    expect(resultado).toBe(42);
    expect(alert).not.toHaveBeenCalled();
  });

  test("Aceita número decimal", () => {
    expect(operacao("3.5", "")).toBe(3.5);
  });

  test("Bloqueia segunda operação seguida", () => {
    const resultado = operacao("5", "+");
    expect(resultado).toBeNaN();
    expect(alert).toHaveBeenCalledWith(
      "Somente uma operação é permitida por vez!",
    );
  });

  test("Avisa quando o visor está vazio", () => {
    const resultado = operacao("", "");
    expect(resultado).toBeNaN();
    expect(alert).toHaveBeenCalledWith("Selecione ao menos um numero!");
  });
});

describe("digitar", () => {
  test("Cola a tecla no final do visor", () => {
    expect(digitar("12", "3")).toBe("123");
  });

  test("Funciona com o visor vazio", () => {
    expect(digitar("", "7")).toBe("7");
  });

  test("Mantém o zero à esquerda", () => {
    expect(digitar("0", "5")).toBe("05");
  });
});


pitagoras jpg
remover as funções dos tsx de pagina e usar a do calculators
arrumar a logica do pitagoras.