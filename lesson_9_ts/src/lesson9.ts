//* Задача 1. Отримання випадкового елемента.  Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий елемент з нього.
//---
import getRandom from "./task_1/getRandom.js";
import logDatasetValues from "./task_1/logDatasetValues.js";

//---
const numberSets = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  empty: [],
};

const stringSets = {
  names: ["Іван", "Олег", "Ольга"],
  cities: ["Київ", "Львів"],
};

const boolSets = {
  bools: [true, false, true, false],
  flags: [true, false],
};
//---
logDatasetValues<number>(numberSets, getRandom);
logDatasetValues<string>(stringSets, getRandom);
logDatasetValues<boolean>(boolSets, getRandom);

//===================================

//* Задача 2. Менеджер операцій. Створи клас OperationManager<T>, який зберігає список операцій будь-якого типу і має метод executeAll(callback: (item: T) => void) для виконання їх усіх.

import OperationsList from "./task_2/OperstionsList.js";
import OperationLogger from "./task_2/OperationLogger.js";

const operations = new OperationsList<string>();
operations.add("Операція 1");
operations.add("Операція 2");
operations.add("Операція 3");

const logger = new OperationLogger(operations);
logger.logAll();

//===========================================

//* Задача 3. Інтерфейс для перетворювача. Створи інтерфейс Transformer<T, U> з методом transform(value: T): U. Реалізуй кілька прикладів трансформацій: — рядок у число, — число у рядок, — об’єкт у JSON.

import runAllTransformations from "./task_3/examples/runAllTransformations.js";

runAllTransformations()

//===========================================


//* Задача 4. Обмеження для типів, що реалізують інтерфейс.  Створи інтерфейс Printable з методом print(): void. Опиши узагальнену функцію printAll<T extends Printable>(items: T[]), яка викликає метод print() для кожного елемента масиву.

import User from "./task_4/examples/User.js";
import Product from "./task_4/examples/Product.js";
import printAll from "./task_4/printAll.js";

const users: User[] = [new User("Ivan"), new User("Olga")];
const products: Product[] = [new Product("Ноутбук"), new Product("Смартфон")];

printAll(users)
printAll(products)

//===========================================


//* Задача 5. Ролі користувачів і їхні дозволи. Опиши тип Roles = "admin" | "editor" | "viewer". Створи тип RolePermissions = Record<Roles, string[]>, де кожен ключ містить список дій, які дозволені ролі.

import getActionsFor from "./task_5/getActionsFor.js";

const editorActions = getActionsFor('editor')
console.log(editorActions);
