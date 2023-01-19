// Boolean #
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number #
const int: number = 213;
const float: number = 4.5;
const num: number = 3e5;

// String #
const message: string = "hello world";

//Array #

const arr: number[] = [12, 3, 4124];
const arr2: Array<number> = [1, 2, 3, 3]; //такая запись называется - generic type, обычно, используется для определения общих типов или дженериков (generics). // Также Array - это глобальный класс
const str: string[] = ["hello", "world"];

// // Tuple #
// Тип Tuple дает вам возможность объявить массив с известным фиксированным количеством элементов, которые не обязаны быть одного типа. Например, вы хотите иметь значение Tuple как пару "строка" и "число":

const arrTuple: [string, boolean, string] = ["hello", true, "world"];
// Any #
// Тип any - это мощный способ работы с существующим Javascript, который позволяет вам постепенно включать все больше проверок типов на этапе компиляции. Вы можете ожидать, что Object будет играть такую же роль, какую и в других языках. Но переменные типа Object позволяют вам только присваивать им любое значение.

let strings: any = "hello world";
strings = true;
strings = [];

// Функции

function sayMyName(name: string, age?: number): void {
  // если функция ничего не возвращает то можем прописывать тип void
  console.log(name);
}

sayMyName("WORLD", 12);

//Never
// function throwError(message: string): never {
//   throw new Error(message);
// }

// function infinite(): never {
//   while (true) {}
// }

//Type
type Login = string;

const Str: Login = "hello";

type ID = string | number;

const id1: ID = "string";
const id2: ID = 12412;

// undefined, null

type SomeType = string | undefined | null;
