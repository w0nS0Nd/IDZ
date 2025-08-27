import { add, sub, mul, div, calculate } from '../../src/calc';

describe('calc: unit', () => {
  test('add', () => expect(add(2,3)).toBe(5));
  test('sub', () => expect(sub(7,4)).toBe(3));
  test('mul', () => expect(mul(6,5)).toBe(30));
  test('div', () => expect(div(10,2)).toBe(5));
  test('div by zero', () => expect(()=>div(8,0)).toThrow('DivisionByZero'));

  test('calculate valid', () => expect(calculate(2,'+',3)).toBe(5));
  test('invalid operator', () => expect(()=>calculate(2 as any,'?' as any,3)).toThrow('InvalidOperator'));
  test('invalid number', () => expect(()=>calculate(Number.NaN,'+',3)).toThrow('InvalidNumber'));
});