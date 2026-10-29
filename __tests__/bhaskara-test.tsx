
import { describe, expect, test } from '@jest/globals';
import { calcDelta } from '../src/components/calculators';


describe('Bhaskara', () => {
  test('Delta negativo', () => {
      // Dado / Arrange
      const a = 1;
      const b = 1;
      const c = 1;
      // Quando / Act
      const resultado = calcDelta(a, b, c);
  
      // Então / Assert
      expect(resultado).toBeLessThan(0);
    });
    test('Delta zerado', () => {
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