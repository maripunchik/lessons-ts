import setupCodeFolders from "./setupCodeFolders";
document.addEventListener("DOMContentLoaded", () => {
  setupCodeFolders();
});

//==================

//* Задача 1.(Strategy) Обробка платежів різними способами
// Опиши базовий інтерфейс PaymentStrategy з методом pay(amount: number).  Створи реалізації для різних варіантів оплати: CreditCardPayment, PayPalPayment, CryptoPayment.  Контекст PaymentProcessor має використовувати будь-яку стратегію залежно від вибору користувача.

import PaymentProcessor from "./ts/Strategy/PaymentProcessor";
import CryptoPayment from "./ts/Strategy/strategies/CryptoPayment";
import PayPalPayment from "./ts/Strategy/strategies/PayPalPayment";
import CreditCardPayment from "./ts/Strategy/strategies/CreditCardPayment";

const processor = new PaymentProcessor(new CryptoPayment());
processor.process(1000);

processor.setStrategy(new PayPalPayment());
processor.process(500);

processor.setStrategy(new CreditCardPayment());
processor.process(500);

// ===================

//* Задача 2. (Observer(Pub-Sub)) Сповіщення про зміни на рахунку в банку
// Створи клас BankAccount, який повідомляє підписані сервіси (SMSNotifier, EmailNotifier, Logger) про зміну балансу.  Мета - продемонструвати, як одна подія може запускати кілька незалежних дій (надсилання SMS, e-mail, логування).

import EmailNotifier from "./ts/observer/services/EmailNotifier";
import SMSNotifier from "./ts/observer/services/SMSNotifier";
import Logger from "./ts/observer/services/Logger";
import BankAccount from "./ts/observer/BankAccount";

const smsNotifier = new SMSNotifier();
const emailNotifier = new EmailNotifier();
const logger = new Logger();

const account = new BankAccount(1000);

account.subscribe(smsNotifier);
account.subscribe(emailNotifier);
account.subscribe({ update: logger.update.bind(logger) });

account.setBalance(500);

account.publish_balance();

// ===============

//* Задача 3.(State) Стан світлофора (Traffic Light)
//  Завдання:  Реалізуй клас TrafficLight, який циклічно переходить між станами:
//  Red,
//  Yellow,
//  Green.
//  Кожен стан має метод next(), який змінює поточний стан, і signal(), який виводить колір світла.  Можна додати метод autoCycle() для демонстрації повного циклу.

import TrafficLight from "./ts/State/TrafficLight";

const light = new TrafficLight();

light.signal();
light.next();
light.signal();
light.next();
light.signal();
light.next();

//--
console.log(`🚦`);

light.autoCycle(3);

// =================
//* Задача 4.(Command) Керування дроном або роботом
//  Завдання:  Опиши Command для керування рухом дрона:
//  MoveUpCommand,
//  MoveDownCommand,
//  TurnLeftCommand,
//  TurnRightCommand.
//  Клас Drone (Receiver) реалізує методи руху.  
// Клас Controller (Invoker) зберігає список виконаних команд і має метод undoLast().

import Drone from "./ts/Command/Drone";
import Controller from "./ts/Command/Controller";
import MoveUpCommand from "./ts/Command/commands/MoveUpCommand";
import TurnLeftCommand from "./ts/Command/commands/TurnLeftCommand";
import MoveDownCommand from "./ts/Command/commands/MoveDownCommand";
import TurnRightCommand from "./ts/Command/commands/TurnRightCommand";

const drone = new Drone();
const controller = new Controller();

controller.executeCommand(new MoveUpCommand(drone));
controller.executeCommand(new TurnLeftCommand(drone));
controller.executeCommand(new MoveDownCommand(drone));
controller.executeCommand(new TurnRightCommand(drone));

controller.undoLast();
controller.undoLast();

// ==============

//* Задача 5.(Chain of Responsibility) Перевірка доступу до API
//  Завдання:  Реалізуй ланцюг безпеки для API-запиту:
//  TokenValidationHandler - перевіряє, чи токен існує;
//  RoleCheckHandler - перевіряє, чи користувач має потрібну роль (admin, user);
//  RateLimitHandler - перевіряє, чи не перевищено ліміт запитів.
//  Якщо всі перевірки пройдені, запит обробляє RequestProcessor.
//  Мета: моделювати middleware-ланцюг у стилі Express.js / NestJS.

import TokenValidationHandler from "./ts/Chain of Responsibility/handlers/TokenValidationHandler";
import RoleCheckHandler from "./ts/Chain of Responsibility/handlers/RoleCheckHandler";
import RateLimitHandler from "./ts/Chain of Responsibility/handlers/RateLimitHandler";
import RequestProcessor from "./ts/Chain of Responsibility/RequestProcessor";

const tokenHandler = new TokenValidationHandler();
const roleHandler = new RoleCheckHandler("admin");
const rateLimitHandler = new RateLimitHandler();
const requestProcessor = new RequestProcessor();

tokenHandler.setNext(roleHandler).setNext(rateLimitHandler).setNext(requestProcessor)

tokenHandler.handle({token:"abc123", role: "admin", userId:"u1"})
tokenHandler.handle({ token: "abc123", role: "user", userId: "u2" });

tokenHandler.handle({role: "admin", userId: "u3" });

tokenHandler.handle({ token: "abc123", role: "admin", userId: "u1" });
tokenHandler.handle({ token: "abc123", role: "admin", userId: "u1" });
tokenHandler.handle({ token: "abc123", role: "admin", userId: "u1" });


//=================

import { renderCard } from "./ts/ThankYou/RenderCard";

document.addEventListener("DOMContentLoaded", renderCard);
