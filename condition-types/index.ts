type isNumber<T> = T extends number ? true : false; // В блоке выражения с помощью ключевого слова extends устанавливается принадлежность к заданному типу

type Test1 = isNumber<number>;

// Например, возьмем следующую функцию createLabel :

interface IdLabel {
  id: number; // некоторые поля
}
interface NameLabel {
  name: string; // другие поля
}

// перезагрузка функции
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// Вместо этого мы можем закодировать эту логику в условном типе:

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

//  Затем мы можем использовать этот условный тип для упрощения наших перегрузок до одной функции без перегрузок.

function createLabell<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
console.log(a);

let b = createLabel(2.8);

let c = createLabel(Math.random() ? "hello" : 42);
