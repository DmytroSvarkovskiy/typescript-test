let age: number = 50;
let names: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

enum Status {
  LOADING,
  READY,
}
const page = {
  load: Status.READY,
};

if (page.load === Status.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.load === Status.READY) {
  console.log('Сторінка завантажена');
}
let variable: string | number;
let oneData: 'enable' | 'disable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: string;
  };
};

const page1: Page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date(),
    updateAt: '2021-05-01',
  },
};

const page2: Page1 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
