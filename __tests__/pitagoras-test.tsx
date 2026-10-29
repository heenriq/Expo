import { describe, expect, test } from "@jest/globals";
import { calcPitagoras } from "../src/app/calculadoras/pitagoras";

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