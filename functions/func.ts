function add(a: number, b: number): number {
  return a + b;
}

function upperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}
/// щас идет перезагрузка функций
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (a === undefined && b === undefined) {
    return { x: undefined, y: undefined };
  }
  if (a !== undefined && b === undefined) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
}

console.log("Empty:", position());
console.log("One param:", position(42));
console.log("Two param:", position(10, 10));
