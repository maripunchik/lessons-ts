"use strict";
//* Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data»("field2Data"). Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
function validateFieldType(value, fieldName) {
    if (typeof value === "string" || typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Неправильний тип для поля ${fieldName}: отримано ${typeof value}`);
    }
}
const raw = localStorage.getItem('field2Data');
if (raw) {
    try {
        const obj = JSON.parse(raw);
        const field2 = validateFieldType(obj.field2, 'field2');
        let result1 = '';
        if (typeof field2 === 'string') {
            result1 = `Поле ${field2} є рядком довжиною ${field2.length}`;
        }
        else {
            const evenOrOddNum = field2 % 2 === 0 ? 'парне' : 'непарне';
            result1 = `Поле ${field2} є числом, воно ${evenOrOddNum}`;
        }
        console.log(result1);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log(String(error));
        }
    }
}
//---
localStorage.setItem('field2Data', JSON.stringify({ field2: 77 }));
// localStorage.setItem('field2Data',JSON.stringify({field2:"тест"}))
// =======================================================
//* Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data»("userInfoData"). Вивести на екран усі поля та їх значення.
const userInfo = {
    name: 'Ivan',
    age: 30,
    isAdmin: true,
    skills: ['JS', 'TS']
};
//---
localStorage.setItem('userInfoData', JSON.stringify(userInfo));
function displayLocalStorageObject(key, displayElementId = 'display') {
    const rawData = localStorage.getItem(key);
    if (!rawData) {
        console.log(`Дані з ключем "${key}" не знайдено в localStorage`);
        return;
    }
    try {
        const obj = JSON.parse(rawData);
        if (typeof obj !== 'object' || obj === null) {
            throw new Error(`Значення за ключем ${key} не є об'єктом`);
        }
        let result2 = `Дані з ключем "${key}":\n`;
        for (const key of Object.keys(obj)) {
            result2 += `${key}:${obj[key]}\n`;
        }
        console.log(result2);
        const displayEl = document.getElementById(displayElementId);
        if (displayEl) {
            displayEl.innerText = result2;
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log(String(error));
        }
    }
}
//---
displayLocalStorageObject('userInfoData');
//---
const calculateProductTotal = (product) => product.price * product.quantity;
//---
const calculateTotal = (products) => products.reduce((sum, product) => sum + calculateProductTotal(product), 0);
//---
const generateReceipt = (products) => {
    const lines = products.map(product => {
        const total = calculateProductTotal(product);
        return `${product.name} - ${product.quantity} x ${product.price.toFixed(2)} = ${total.toFixed(2)} грн`;
    });
    const receipt = [
        "Фіскальний чек",
        "*********",
        ...lines,
        "*********",
        `Загальна сума: ${calculateTotal(products).toFixed(2)} грн`,
    ].join("\n");
    return receipt;
};
//---
const products = [
    { name: "Молоко", price: 32.5, quantity: 2 },
    { name: "Хліб", price: 18.0, quantity: 3 },
];
console.log(generateReceipt(products));
//---
const receiptEl = document.getElementById('receipt');
if (receiptEl) {
    receiptEl.innerText = generateReceipt(products);
}
//* Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.
if (confirm("Запустити задачу №4?")) {
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const workingDaysStr = ['mon', 'tue', 'wed', 'thu', 'fri'];
    const workingDaysNum = [1, 2, 3, 4, 5];
    //---
    const isWorkingDay = (day) => typeof day === 'string' ? workingDaysStr.includes(day) : workingDaysNum.includes(day);
    //---
    const isDayNameNumber = (value) => value >= 0 && value < dayNames.length;
    //---
    const checkDay = () => {
        var _a, _b;
        const showDay = document.getElementById('dayResult');
        const userInputDay = (_b = (_a = prompt(`Введіть назву (mon-sun) дня або номер дня (1-7)`)) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        if (!showDay || !userInputDay)
            return;
        const parsed = parseInt(userInputDay);
        let day;
        const matched = dayNames.find(name => name === userInputDay);
        if (matched) {
            day = matched;
        }
        else if (!isNaN(parsed) && isDayNameNumber(parsed - 1)) {
            day = parsed - 1;
        }
        if (day !== undefined) {
            const result3 = isWorkingDay(day) ? 'Це робочий день' : 'Це вихідний';
            showDay.innerText = `${userInputDay} - ${result3} `;
        }
        else {
            showDay.innerText = `${userInputDay} - Некоректне значення дня`;
            showDay.style.color = 'red';
        }
    };
    //---
    window.onload = () => {
        checkDay();
    };
}
//* Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let numberCount = 0;
let stringOkCount = 0;
let lastValue = 'Ok';
function generateAndCompare(iterations = 10) {
    for (let i = 0; i < iterations; i++) {
        lastValue = Math.random() > 0.5 ? 5 : 'Ok';
        if (lastValue === 'Ok') {
            stringOkCount++;
        }
        else {
            numberCount++;
        }
        console.log(`Згенеровано: ${lastValue}`);
    }
    const moreOfWhat = numberCount > stringOkCount ? 'чисел' : 'рядків "Ok"';
    console.log(`Було більше ${moreOfWhat}`);
    console.log(`Останнє значення: ${lastValue}`);
    const lastVal = document.getElementById('lastVal');
    if (lastVal) {
        lastVal.innerText = `Було більше ${moreOfWhat}.\n Останнє значення: ${lastValue} `;
    }
}
//---
generateAndCompare();
//================================
//* Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. 
if (confirm("Запустити задачу №6?")) {
    function convertCurrency(currency, sum, rates) {
        const fromRate = rates[currency];
        let result = `Ви ввели: ${sum} ${currency}\n`;
        const allCurrencies = ["USD", "EUR", "UAH"];
        for (let i = 0; i < allCurrencies.length; i++) {
            const targetCurrency = allCurrencies[i];
            if (targetCurrency === currency)
                continue;
            const toRate = rates[targetCurrency];
            const converted = (sum * fromRate) / toRate;
            result += `У ${targetCurrency}: ${converted.toFixed(2)} ${targetCurrency}\n`;
        }
        return result;
    }
    //---
    function handleUserInput(rates) {
        var _a, _b, _c;
        const userInput = (_b = (_a = prompt("Оберіть валюту: USD | EUR | UAH")) === null || _a === void 0 ? void 0 : _a.toUpperCase().trim()) !== null && _b !== void 0 ? _b : "";
        const sum = parseFloat((_c = prompt("Введіть суму грошей")) !== null && _c !== void 0 ? _c : "0");
        const result5 = document.getElementById("convertRes");
        if (!result5)
            return;
        if (userInput === "USD" || userInput === "EUR" || userInput === "UAH") {
            const currency = userInput;
            const resultText = convertCurrency(currency, sum, rates);
            result5.innerText = resultText;
        }
        else {
            result5.innerText = "Некоректна валюта";
        }
    }
    //---
    const rates = {
        USD: 42,
        EUR: 46,
        UAH: 1,
    };
    //---
    handleUserInput(rates);
}
