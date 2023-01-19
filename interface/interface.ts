// readonly = модификатор только для чтения, мы не сможем его изменять
// ? = означает необязательный параметр
interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 800,
    height: 600,
  },
  color: "#000",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 80,
    height: 60,
  },
};

rect2.color = "#EEE";

const rect3 = {} as Rect;

// более старая запись
const rect4 = <Rect>{};

// Унаследование Интерфейсов

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "12345",
  size: {
    width: 800,
    height: 600,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ============
// Интерфейсы называют через I
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

// Чтобы  TS понял что класс реализуется от интерфейса и должен реализовать его методы мы пишем ключевое слово implements
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}
// ==========
interface IStyles {
  [key: string]: string;
}

const css: IStyles = {
  color: "white",
  marginTop: "10px",
  border: "2px solid black",
};
