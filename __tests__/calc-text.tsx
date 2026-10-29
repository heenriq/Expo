import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { calc, digitar, operacao } from "../src/app/calculadoras/calc";

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