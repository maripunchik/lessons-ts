"use strict";
//* Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)
//---
function isHeadStudent(student) {
    return "groupNumber" in student;
}
//--- 
function printStudent(student) {
    console.info(`Студент:`);
    console.log(`ПІБ: ${student.fullName}`);
    console.log(`Курс: ${student.course}`);
    console.log(`Факультет: ${student.faculty}`);
    if (isHeadStudent(student)) {
        console.info(`Староста:`);
        console.log(`Група: ${student.groupNumber}`);
    }
}
//---
const student = {
    fullName: "Марина Мельник",
    course: 3,
    faculty: "Факультет інформатики",
};
const headStudent = {
    fullName: "Іван Іваненко",
    course: 4,
    faculty: "Факультет математики",
    groupNumber: "КД-55"
};
printStudent(student);
printStudent(headStudent);
//---
function printVehicleInfo(vehicle) {
    switch (vehicle.type) {
        case "car":
            console.log(`Авто: модель - ${vehicle.model}, власник - ${vehicle.owner}`);
            break;
        case "bus":
            console.log(`Автобус: компанія - ${vehicle.company}, кількість місць - ${vehicle.seats}`);
            break;
        case "airplane":
            console.log(`Літак: швидкість - ${vehicle.speed} км/год, тип палива - ${vehicle.fuelType}`);
            break;
        default:
            const _exhaustiveCheck = vehicle;
            throw new Error(`Невідомий тип транспорту: ${_exhaustiveCheck}`);
    }
}
//---
console.log(`Задача 2`);
const vehicle1 = { type: "car", model: "Tesla", owner: "Марина" };
const vehicle2 = { type: "bus", company: "FlixBus", seats: 60 };
const vehicle3 = { type: "airplane", speed: 850, fuelType: "керосин" };
printVehicleInfo(vehicle1);
printVehicleInfo(vehicle2);
printVehicleInfo(vehicle3);
//---never
const vehicle4 = {
    type: "train",
    speed: 300,
    fuelType: "електрика"
};
// printVehicleInfo(vehicle4)
//==============================
//* Задача 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). Кожна подія може бути mandatory(обов'язковий) або optional(необов'язковий). Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.
function throwError(message) {
    throw new Error(message);
}
const allEventTypes = ["meeting", "deadline", "reminder"];
//---
const event1 = {
    type: "meeting",
    participants: ["Марина", "Богдан"],
    importance: "mandatory"
};
const event2 = {
    type: "deadline",
    dueDate: new Date("2025-10-30"),
    importance: "optional"
};
const event3 = {
    type: "reminder",
    note: "Привітати з Днем народження",
    importance: "mandatory"
};
//---
function printCalendarEvent(event) {
    switch (event.type) {
        case "meeting":
            console.log(`Заплановано зустріч (${event.importance}): ${event.participants.join(", ")}`);
            break;
        case "deadline":
            console.log(`Дедлайн (${event.importance}): ${event.dueDate.toLocaleDateString()}`);
            break;
        case "reminder":
            console.log(`Нагадування (${event.importance}): ${event.note}`);
            break;
        default:
            throwError(`Невідомий тип події: ${JSON.stringify(event)}`);
    }
}
//---
function printEventList(events) {
    events.forEach((event, index) => {
        console.log(`Подія ${index + 1}:`);
        printCalendarEvent(event);
    });
}
//---
console.log(`Задача 3`);
const events = [event1, event2, event3];
printEventList(events);
const allProductTypes = ["book", "electronics", "clothes"];
//---
const product1 = {
    type: "book",
    author: "Ліна Костенко",
    status: "regularPrice",
};
const product2 = {
    type: "electronics",
    warranty: "2 роки",
    status: "onSale",
};
const product3 = {
    type: "clothes",
    size: "M",
    status: "onSale"
};
//---
function printProductInfo(product) {
    switch (product.type) {
        case "book":
            console.log(`Книга (${product.status}): автор - ${product.author}`);
            break;
        case "electronics":
            console.log(`Електроніка (${product.status}): гарантія - ${product.warranty}`);
            break;
        case "clothes":
            console.log(`Одяг (${product.status}): розмір - ${product.size}`);
            break;
        default:
            throwError(`Невідомий тип продукту: ${JSON.stringify(product)}`);
    }
}
//---
console.log(`Задача 4`);
printProductInfo(product1);
printProductInfo(product2);
printProductInfo(product3);
//---
function isObject(value) {
    return typeof value === "object" && value !== null;
}
//---
function parseJson(raw) {
    if (!raw)
        return null;
    try {
        return JSON.parse(raw);
    }
    catch (error) {
        return null;
    }
}
//---
function isProduct(value) {
    if (!isObject(value))
        return false;
    const obj = value;
    return typeof obj.title === 'string' && typeof obj.price === 'number';
}
//---
function parseProduct(raw) {
    const parsedProduct = parseJson(raw);
    return isProduct(parsedProduct) ? parsedProduct : null;
}
//---
console.log(`Задача 5`);
const product = parseProduct(localStorage.getItem("product"));
if (product) {
    console.log(`Валідний продукт:`, product.title, product.price);
}
else {
    console.warn(`Продукт не валідний або не знайдено`);
}
//---
const demoProduct = {
    title: "Ноутбук ASUS",
    price: 25999,
};
localStorage.setItem("product", JSON.stringify(demoProduct));
//---
function isTicket(value) {
    if (!isObject(value))
        return false;
    const obj = value;
    const isValid = typeof obj.destination === "string" &&
        typeof obj.price === "number" &&
        typeof obj.passengerFullName === "string" &&
        obj.date instanceof Date;
    return isValid;
}
//---
function assertIsTicket(value) {
    if (!isTicket(value)) {
        throw new Error(`Об'єкт не є валідним квитком`);
    }
}
//---
function parseTicket(raw) {
    const parsedTicket = parseJson(raw);
    if (!parsedTicket || !isObject(parsedTicket))
        return null;
    const obj = parsedTicket;
    if (typeof obj.date === 'string') {
        obj.date = new Date(obj.date);
    }
    return isTicket(obj) ? obj : null;
}
//---
console.log(`Задача 6`);
const ticket = parseTicket(localStorage.getItem("ticket"));
if (ticket) {
    console.log(`Куди: ${ticket.destination}`);
    console.log(`Ціна: ${ticket.price} грн`);
    console.log(`Пасажир: ${ticket.passengerFullName}`);
    console.log(`Дата: ${ticket.date.toLocaleDateString()}`);
}
else {
    console.warn(`Квиток не валідний або не знайдено`);
}
//---
const demoTicket = {
    destination: "Прага",
    price: 1200,
    passengerFullName: "Іван Іваненко",
    date: new Date("2025-11-01")
};
localStorage.setItem("ticket", JSON.stringify(demoTicket));
//---
function getAllGrades(studentJournal) {
    return [...studentJournal.math, ...studentJournal.language, ...studentJournal.science];
}
//---
function getSumFromArrNums(arr) {
    return arr.reduce((prevSum, number) => prevSum + number, 0);
}
//---
function getAverage(arr) {
    return arr.length ? getSumFromArrNums(arr) / arr.length : null;
}
//---
function getLargestValInArr(arr) {
    return arr.length ? arr.reduce((prevMax, number) => (number > prevMax ? number : prevMax)) : null;
}
//---
const assessmentManager = {
    math: [10, 10, 11],
    language: [11, 11, 10],
    science: [9, 9, 10],
    getAverage() {
        const allGrades = getAllGrades(this);
        return getAverage(allGrades);
    },
    getMaxGrade() {
        const allGrades = getAllGrades(this);
        return getLargestValInArr(allGrades);
    },
    hasGrades() {
        return (this.math.length > 0 && this.language.length > 0 && this.science.length > 0);
    }
};
//---
console.log(`Задача 7`);
//---
function showResult(label, value) {
    const result = value !== null ? value.toFixed(2) : `немає ${label}`;
    console.log(result);
}
//---
if (assessmentManager.hasGrades()) {
    const avg = assessmentManager.getAverage();
    showResult('середнього', avg);
    const max = assessmentManager.getMaxGrade();
    showResult('максимального', max);
}
else {
    console.log(`Дані неповні. В одному чи декількох предметах немає оцінок`);
}
