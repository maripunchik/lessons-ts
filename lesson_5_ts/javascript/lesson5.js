//* Задача 1. Описати тип «журнал учня» (3 поля-масиви з оцінками ). Потім на основі цього типу створити тип «менеджер оцінок» (додати методи знаходження середньої оцінки і найбільшої оцінки)
import AssessmentManager from "./task_1/AssessmentManager.js";
import AssessmentReporter from "./task_1/AssessmentReporter.js";
//---
const manager = new AssessmentManager({
    math: [10, 10, 11],
    language: [11, 11, 10],
    science: [9, 9, 10]
});
const reporter = new AssessmentReporter(manager);
reporter.report();
//==========================
//* Задача 2. Система Управління Документами 📄
//* Клас: Document (Документ). Має поля: title, content, author, status. Містить методи для архівування або публікації.
//* Enum: DocumentStatus (СтатусДокумента). Визначає етапи життєвого циклу: DRAFT (Чернетка), REVIEW (НаПеревірці), PUBLISHED (Опубліковано), ARCHIVED (ВАрхіві).
import Document from "./task_2/Document.js";
import { DocumentStatus } from "./task_2/types/DocumentStatus.js";
const doc = Document.create({
    title: "Інструкція з безпеки",
    content: "Оновлена політика для співробітників",
    author: "Марина",
    status: DocumentStatus.REVIEW
});
console.log(doc.toString());
doc.publish();
console.log(doc.toString());
doc.archive();
console.log(doc.toString());
//==========================
//* Задача 3. Конфігуратор бази даних 🗃️
//* Інтерфейс: IDatabaseConfig – визначає необхідні параметри підключення (host: string, port: number, username: string, password?: string).
//* Клас: DBConnection – містить приватне поле config: IDatabaseConfig і метод connect(). Клас використовує конфігурацію, тип якої задано інтерфейсом.
import DBConnection from "./task_3/DBConnection.js";
const config = {
    host: "localhost",
    port: 123,
    username: "admin",
    password: "secret"
};
const db = new DBConnection(config);
const result = db.connect();
console.log('Статус:', result.status);
//==========================
//* Задача 4.Система управління сповіщеннями 🔔
//* Клас: NotificationService
//* Складний тип: Визначення типу NotificationPayload.
//* EmailPayload = { recipient: string, subject: string }
//* SMSPayload = { phone: string, text: string }
//* Об'єднання та Перетин: NotificationPayload = ({ type: 'email' } & EmailPayload) | ({ type: 'sms' } & SMSPayload) (Дискримінаційне об'єднання для безпечної роботи з різними типами сповіщень)
//* Метод: sendNotification(payload: NotificationPayload)
import NotificationService from "./task_4/NotificationService.js";
const service = new NotificationService("Maryna");
const emailPayload = {
    type: "email",
    recipient: "123@gmail.com",
    subject: "Нагадування про зустріч"
};
const smsPayload = {
    type: "sms",
    phone: "+380501234567",
    text: "Не забудь про зустріч о 15:00",
};
service.sendNotification(emailPayload);
service.sendNotification(smsPayload);
//==========================
//* Задача 5. Singleton через статичне поле. Використовується для створення єдиного доступного об’єкта (наприклад, масиву для зберження елементів +  відповідні методи додавнаня, вилучення, фільтрації).
import ItemStore from "./task_5/ItemStore.js";
const store = ItemStore.getInstance();
store.add("pen");
store.add("notebook");
store.add("blue pencil");
store.add("red pencil");
store.add("green pencil");
console.log('Усі елементи:\n' + store.toString());
const filtered = store.filterByName("pencil");
console.log('Фільтровані:\n' + ItemStore.format(filtered));
store.remove(3);
store.remove("pen");
console.log('Усі елементи:\n' + store.toString());
const filtered1 = store.filterByName("pencil");
console.log('Фільтровані:\n' + ItemStore.format(filtered1));
