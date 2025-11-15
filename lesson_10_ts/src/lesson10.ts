//* 1. Чернетка товару:
//*  Описати тип Auto (id, марка, колір, рік_випуску, власник). Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.
console.log(`задача №1`);

//---
import { DraftAuto } from "./task_1/types.js";
import { draftAutoFields } from "./task_1/fieldLabels.js";
import showDraft from "./task_1/showDraft.js";
import saveDraftAutoIfValid from "./task_1/validation/saveDraftAutoIfValid.js";
import clearDraft from "./task_1/clearDraft.js";

const draft: DraftAuto = {
  brand: "Makaka",
  color: "Cream",
}; //--невалідні значення
//---
const draft1: DraftAuto = {
  year: 2014,
  brand: "Peugeot",
  color: "Cream",
};
saveDraftAutoIfValid("draftAuto", draft);
saveDraftAutoIfValid("draftAuto", draft1);
//---
// clearDraft('draftAuto')

showDraft<DraftAuto>("draftAuto", draftAutoFields);

//===============================

//* 2. Налаштування гри GameSettings (швидкість, рівень, тип ворогів). Потім на  основі цього типу створити тип, що не можна змінювати під час гри.
console.log(`задача №2`);
//---
import { FixedGameSettings } from "./task_2/types.js";
import printFinalSettings from "./task_2/printFinalSettings.js";
import { fieldLabels } from "./task_2/fieldLabels.js";

const finalSettings: FixedGameSettings = {
  speed: 50,
  level: 2,
  enemyType: "robots",
};

printFinalSettings(finalSettings, fieldLabels);

//===============================

//* 3. Мінімальні дані для таблиці. Дано тип Employee, що містить опис (перелік) полів, що можуть бути у працівника (ім'я, рік_народження, заробітна плата, стаж, підрозділ, адреса, спеціальність). Потім на основі цього типу  створи новий тип даних, що буде містити тільки ім'я, підрозділ та заробітну плату)
console.log(`задача №3`);
//---
import { EmployeeDataExtraction } from "./task_3/types.js";

const employeeData: EmployeeDataExtraction = {
  name: "Ivan",
  department: "Front-End",
  salary: 80000,
};

console.log(employeeData);

//===============================

//* 4. Використовуючи тип параметрів createProduct (title, price,discount) розробити функцію, яка б формувала параметри для створення продукту.
console.log(`задача №4`);
//---
import createProductFromArgs from "./task_4/createProductFromArgs.js";

const product1 = createProductFromArgs(["iPhone 15", 1200, 10]);
console.log(product1);

const product2 = createProductFromArgs(["MacBook Air", 999]);
console.log(product2);

//===============================

//* 5. Розробити функції для збереження/зчитування/перевірки якихось даних у localStorage. Додати опис у коментарях та створити автоматично документацію.
//---
import insertTaskButton from "./insertDocsButton.js";

window.onload = () => {
  insertTaskButton(
    '[data-task="task_5"]',
    'docs/functions/saveToLocalStorage.default.html'
  );
};
