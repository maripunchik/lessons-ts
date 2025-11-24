// ============ singltone======================

//💬 4. Глобальний стан гри
// Розроби клас GameManager, який зберігає поточний рівень, кількість очок, життя гравця тощо. Використай Singleton, щоб цей стан був спільним для всієї гри.
//
console.log(`Завдання 1`);

import GameManager from "./task_1/GameManager.js";
import GameDebugger from "./task_1/GameDebugger.js";

const game = GameManager.getInstance();

game.addPoints(100);
game.loseLife();
game.nextLife();

GameDebugger.logState(game);

//===========================================

// ========== Factory Method ========================

// 🧠 5. Система генерації завдань для навчальної платформи
// Створи абстрактний клас TaskFactory з методом createTask().  Реалізуй конкретні фабрики для створення різних типів завдань:
// MathTaskFactory → генерує арифметичні задачі,
// StringTaskFactory → задачі на обробку рядків,
// OOPTaskFactory → задачі на класи й спадкування.  Кожна фабрика повинна повертати об’єкт з описом завдання та методом execute().
console.log(`Завдання 2`);

import MathTaskFactory from "./task_2/TaskFactories/MathTaskFactory.js";
import StringTaskFactory from "./task_2/TaskFactories/StringTaskFactory.js";
import OOPTaskFactory from "./task_2/TaskFactories/OOPTaskFactory.js";

import runTask from "./task_2/runTask.js";

const mathFactory = new MathTaskFactory();
const stringFactory = new StringTaskFactory();
const oopFactory = new OOPTaskFactory();

runTask(mathFactory);
runTask(stringFactory);
runTask(oopFactory);

// ===Abstract Factory (Абстрактна фабрика) =====

//  5. Інтерфейси навчальної платформи (веб / мобільна / десктопна)
// Завдання:  Створи LearningUIFactory, яка створює:
// LessonView,
// QuizComponent,
// ProgressTracker.
// Реалізуй фабрики:
// WebLearningUIFactory,
// MobileLearningUIFactory,
// DesktopLearningUIFactory.
// Мета: моделювання кросплатформного інтерфейсу, де для кожної платформи створюються свої реалізації компонентів.
console.log(`Завдання 3`);

import WebLearningUIFactory from "./task_3/factories/WebLearningUIFactory.js";
import MobileLearningUIFactory from "./task_3/factories/MobileLearningUIFactory.js";
import DesktopLearningUIFactory from "./task_3/factories/DesktopLearningUIFactory.js";
import renderPlatformUI from "./task_3/renderPlatformUI.js";

const factory = new WebLearningUIFactory();
renderPlatformUI(factory);
const factory1 = new MobileLearningUIFactory();
renderPlatformUI(factory1);
const factory2 = new DesktopLearningUIFactory();
renderPlatformUI(factory2);

// ==================================
// ============= Builder =====================

// 📦 4. Конструктор складного запиту до бази даних (QueryBuilder)
// Створи QueryBuilder, який дозволяє покроково формувати SQL-запит (SELECT, WHERE, ORDER BY, LIMIT).  Мета - навчитися будувати складні текстові конструкції без використання довгих конкатенацій або умовних операторів.
console.log(`Завдання 4`);

import QueryBuilder from "./task_4/QueryBuilder.js";

const query = new QueryBuilder()
  .select("id", "name", "email")
  .from("users")
  .where("age>18")
  .where("status = 'active'")
  .orderBy("name", "ASC")
  .limit(10)
  .build();

console.log(query.toSQL());

// ==================================
// =============== Prototype ===================

//  🎨 3. Клонування об’єктів графічного редактора
// Завдання:  Реалізуй базовий інтерфейс Shape із методом clone().  Створи класи Circle, Rectangle, Line, які реалізують цей інтерфейс.  Додай масив shapes, у якому можна копіювати будь-яку фігуру, не знаючи її типу.  Мета - продемонструвати поліформне копіювання (глибоке клонування різних об’єктів через спільний інтерфейс).
console.log(`Завдання 5`);

import IShape from "./task_5/IShape.js";
import Circle from "./task_5/shapes/Circle.js";
import Rectangle from "./task_5/shapes/Rectangle.js";
import Line from "./task_5/shapes/Line.js";

import duplicateShapes from "./task_5/duplicateShapes.js";

const shapes: IShape[] = [
  new Circle(10, 20, 5),
  new Rectangle(0, 0, 100, 50),
  new Line(0, 0, 10, 10),
];

duplicateShapes(shapes);

// ==================================
// ====== ⚙️ II. Структурні (Structural Patterns) ======
// ============= Adapter =====================

// 🧩 3. Інтеграція старого і нового API логування
// Є старий клас LegacyLogger із методом writeLog(message), і новий інтерфейс Logger із методом log(message, level).  Завдання - створити адаптер LegacyLoggerAdapter, який дозволить використовувати старий логер у новій системі без зміни його коду.
console.log(`Завдання 6`);

import ILogger from "./task_6/ILogger.js";
import LegacyLogger from "./task_6/LegacyLogger.js";
import LegacyLoggerAdapter from "./task_6/LegacyLoggerAdapter.js";

const legasy = new LegacyLogger();
const logger: ILogger = new LegacyLoggerAdapter(legasy);

logger.log("System started", "info");
logger.log("Low disk space", "warn");
logger.log("Unhandled exception", "error");
// ==================================
// ============= Facade =====================

// 🧠 4. Фасад для навчальної системи тестування
// Є підсистеми:
// QuestionBank - зберігає питання,
// Timer - відліковує час,
// ResultEvaluator - перевіряє відповіді,
// ReportGenerator - формує звіт.  Створи ExamFacade, який має методи startExam(), submitAnswer(), finishExam(), що координують роботу всіх підсистем.
console.log(`Завдання 7`);

import runExamSession from "./task_7/runExamSession.js";

runExamSession(
  ["2+2=?", "Столиця Франції?", "4+4=?"],
  ["4", "Париж", "8"],
  ["4", "Париж", "7"]
);

// ==================================
// ============== Decorator ====================
// 🌐 1. Розширення HTTP-запитів (декоратори запитів у веб-додатку)
// Є базовий клас HttpRequest, який виконує запит методом send().  Необхідно створити декоратори, які можуть:
// додавати JWT-токен (AuthDecorator),
// кешувати відповіді (CacheDecorator),
// логувати запити (LoggerDecorator).  Мета - навчитися динамічно додавати поведінку до запитів без зміни базового коду API-клієнта.
console.log(`Завдання 8`);

import executeRequestChain from "./task_8/executeRequestChain.js";

executeRequestChain();

// ==================================
// ========= Composite (Компонувальник) ===============

// 🗂️ 5. Файлова система (папки й файли)
// Завдання:  Реалізуй класи File і Directory, що реалізують спільний інтерфейс FileSystemItem.  Кожен елемент має методи getSize() і show().  Для Directory метод getSize() має обчислювати сумарний розмір усіх вкладених файлів і папок.
// Мета: відтворити класичний реальний приклад Composite у контексті файлових структур.
console.log(`Завдання 9`);

import File from "./task_9/File.js";
import Directory from "./task_9/Directory.js";

const file1 = new File("resume.pdf", 120);
const file2 = new File("photo.png", 350);
const file3 = new File("notes.txt", 15);
const file4 = new File("resume.pdf", 120);

const docs = new Directory("Documents", [file1, file3]);
docs.add(file4);
const images = new Directory("Images");
images.add(file2);

const root = new Directory("Root", [docs, images]);
root.show();

// ==================================
// ==============Proxy====================
// 💤 3. Ліниве завантаження (Virtual Proxy)
// Завдання:  Створи клас Image з методом display(), який показує зображення.  Додай ImageProxy, який відкладає завантаження “важкого” файлу до моменту, коли користувач реально викликає display().
// Мета: навчитися реалізовувати lazy loading великих ресурсів через проксі.
console.log(`Завдання 10`);

import ImageProxy from "./task_10/ImageProxy.js";
import IImage from "./task_10/IImage.js";

const image1: IImage = new ImageProxy("photo1.png");
const image2: IImage = new ImageProxy("photo2.png");

console.log("Зображення ще не завантажені");
image1.display();
image1.display();
image2.display();
