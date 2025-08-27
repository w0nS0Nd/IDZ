export type Op = '+' | '-' | '*' | '/';

export function add(a: number, b: number) { return a + b; }
export function sub(a: number, b: number) { return a - b; }
export function mul(a: number, b: number) { return a * b; }
export function div(a: number, b: number) {
  if (b === 0) throw new Error('DivisionByZero');
  return a / b;
}

export function calculate(a: number, op: Op, b: number): number {
  if (Number.isNaN(a) || Number.isNaN(b)) throw new Error('InvalidNumber');
  switch (op) {
    case '+': return add(a, b);
    case '-': return sub(a, b);
    case '*': return mul(a, b);
    case '/': return div(a, b);
    default: throw new Error('InvalidOperator');
  }
}