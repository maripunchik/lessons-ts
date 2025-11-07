
//* Задача 1.  Завантаження зображень:
//* Клас і завантажує, і стискає, і логує дії.
//! ❌ Неправильна реалізація 
// class ImageUploaderBad {
//   uploadImage(filePath: string) {
//     const compressed = this.compressImage(filePath);
//     console.log(`Uploading ${compressed} to server...`);
//     this.logAction(`File ${filePath} uploaded successfully.`);
//   }
//   private compressImage(path: string): string {
//     console.log(`Compressing image: ${path}`);
//     return `compressed_${path}`;
//   }
//   private logAction(message: string) {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] LOG: ${message}`);
//   }
// }
//---

import Logger from "./task_1/services/Logger.js";
import Compressor from "./task_1/services/Compressor.js";
import ServerUploader from "./task_1/services/ServerUploader.js";
import ImageUploader from "./task_1/ImageUploader.js";

const uploader = new ImageUploader(new ServerUploader(), new Compressor(), new Logger())

uploader.uploadImage("cat.png")

// ================================
//* Задача 2. Побудова графіків:
//* Клас ChartRenderer створює різні типи графіків: лінійний, стовпчиковий, круговий.
//* Якщо потрібно додати новий тип графіка, код доведеться змінювати.
//! ❌ Неправильна реалізація — порушення принципу відкритості/закритості
// class ChartRendererBad {
//   renderChart(type: string, data: number[]) {
//     if (type === "line") {
//       console.log("Rendering line chart with", data);
//     } else if (type === "bar") {
//       console.log("Rendering bar chart with", data);
//     } else if (type === "pie") {
//       console.log("Rendering pie chart with", data);
//     } else {
//       console.log("Unknown chart type");
//     }
//   }
// }
//---
import ChartRenderer from "./task_2/ChartRenderer.js";
import LineChart from "./task_2/chart-strategies/LineChart.js";

const renderer=new ChartRenderer(new LineChart())
const data=[10,20,30]
renderer.render(data)

// ===============================
//* Задача 3. // ========== L (Liskov Substitution Principle) ===========
//* Сенсори у системі моніторингу (з можливістю вмикати/вимикати):
//* Є базовий клас Sensor із методом getValue() і методами увімкнення/вимкнення.
//* Підклас OfflineSensor повертає помилку замість числового значення, якщо вимкнений.
//! ❌ Порушення LSP — клієнтський код очікує завжди число, але отримує виняток

// class SensorBad {
//   private _isOn: boolean = true;

//   turnOn() {
//     this._isOn = true;
//     console.log("✅ Sensor turned ON");
//   }
//   turnOff() {
//     this._isOn = false;
//     console.log("⚙️ Sensor turned OFF");
//   }

//   getValue(): number {
//     // навіть якщо сенсор "вимкнений", базовий клас усе одно повертає значення
//     return Math.random() * 100;
//   }
// }

// class OfflineSensorBad extends SensorBad {
//   getValue(): number {
//     // ❌ Порушення LSP — поведінка змінюється: замість числа — помилка
//     throw new Error("Sensor offline! Cannot read value.");
//   }
// }

//---
import Sensor from "./task_3/Sensor.js";
import SensorValueLogger from "./task_3/SensorValueLogger.js";

const sensor = new Sensor()
SensorValueLogger.log(sensor)

//* Задача 4. Банківські операції:
//* Є універсальний інтерфейс BankService із усіма можливими операціями.
//* Проте не всі типи рахунків підтримують однакові функції.
//! ❌ Порушення ISP — інтерфейс занадто широкий, усі класи реалізують непотрібні методи.
// interface BankServiceBad {
//   deposit(amount: number): void;
//   withdraw(amount: number): void;
//   transfer(to: string, amount: number): void;
//   loanRequest(amount: number): void;
// }
// // 💰 Клас SavingsAccount підтримує лише внесення, зняття та переказ,
// // але не може оформлювати кредити.
// class SavingsAccountBad implements BankServiceBad {
//   deposit(a: number) { console.log(`SavingsAccount: Deposited ${a}`); }
//   withdraw(a: number) { console.log(`SavingsAccount: Withdrawn ${a}`); }
//   transfer(to: string, a: number) { console.log(`SavingsAccount: Transferred ${a} to ${to}`); }
//   loanRequest(a: number) {
//     throw new Error("❌ Savings account cannot request loans!");
//   }
// }

// 🏦 Клас LoanAccount створений лише для кредитів, але змушений реалізовувати інші методи.
// class LoanAccountBad implements BankServiceBad {
//   deposit(a: number) {
//     throw new Error("❌ Loan account cannot accept deposits directly!");
//   }
//   withdraw(a: number) {
//     throw new Error("❌ Loan account cannot withdraw funds directly!");
//   }
//   transfer(to: string, a: number) {
//     throw new Error("❌ Loan account cannot make transfers!");
//   }
//   loanRequest(a: number) {
//     console.log(`LoanAccount: Loan of ${a} requested`);
//   }
// }
// 💳 Клас CheckingAccount (поточний рахунок) не може оформлювати кредити,
// але все одно змушений реалізувати метод loanRequest().
// class CheckingAccountBad implements BankServiceBad {
//   deposit(a: number) { console.log(`CheckingAccount: Deposited ${a}`); }
//   withdraw(a: number) { console.log(`CheckingAccount: Withdrawn ${a}`); }
//   transfer(to: string, a: number) { console.log(`CheckingAccount: Transferred ${a} to ${to}`); }
//   loanRequest(a: number) {
//     throw new Error("❌ Checking account cannot request loans!");
//   }
// }
//---
import SavingsAccount from "./task_4/accounts/SavingsAccount.js";
import CheckingAccount from "./task_4/accounts/CheckingAccount.js";
import LoanAccount from "./task_4/accounts/LoanAccount.js";

const savings = new SavingsAccount()
savings.deposit(1000)
savings.withdraw(300)
savings.transfer("Alice", 200)

const checking = new CheckingAccount()
checking.deposit(500)
checking.withdraw(100)
checking.transfer("John", 50)

const loan = new LoanAccount()
loan.loanRequest(5000)
// ==============================
//* Задача 5. Рендеринг сторінок:
//* PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
// class HTMLTemplateRendererBad {
//   render(content: string) {
//     console.log(`<html>${content}</html>`);
//   }
// }

// class PageRendererBad {
//   private renderer = new HTMLTemplateRendererBad(); // ❌ залежність від конкретного класу
//   showPage(text: string) {
//     this.renderer.render(text);
//   }
// }
//---
import PageRenderer from "./task_5/PageRenderer.js";
import HTMLTemplateRenderer from "./task_5/renderers/HTMLTemplaeRenderer.js";
import MarkdownRenderer from "./task_5/renderers/MarkdownRenderer.js";
import PDFRenderer from "./task_5/renderers/PDFRenderer.js";

const htmlPage = new PageRenderer(new HTMLTemplateRenderer())
htmlPage.showPage("Привіт!")

const mdPage = new PageRenderer(new MarkdownRenderer())
mdPage.showPage("Заголовок")

const pdfPage= new PageRenderer(new PDFRenderer())
pdfPage.showPage("Звіт")










