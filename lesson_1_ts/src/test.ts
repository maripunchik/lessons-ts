//* ================ змінні
// 0. Вводиться ім’я користувача («Гість» якщо не введе). Привітати користувача
// const userName: string = prompt('User name ') ?? 'Гість'
// document.writeln(`Hello ${userName}`)
// -----
// 1. Ввести ім’я користувача («Гість» якщо не введе) і його вік (0 якщо не введе). Якщо вік більше 17 привітати,  інакше – повідомити про заборону відвідування сайту
// const userName = prompt('User name ') ?? 'Гість'
// const age = parseInt(prompt('Age = ') !) //!Примусово каже "не null"
// const age = parseInt(prompt('Age = ') ?? '0')//*безпечніший варіант

// const minAge = 17

// if (age > minAge) document.writeln(`Hello ${userName}`)
// else document.writeln('Denied!')

// 2. Створити змінні для збереження інформації про книгу: title (рядок), pages (число), isPublished (булеве).
// let title:string
// let pages:number
// let isPublished:boolean

// 3. Додайте типи даних

// let userName:string = "Andrii";
// let age:number = 47;
// let isAdmin:boolean = false;
// let empty:null = null;
// let notAssigned:undefined = undefined;
// let id:symbol = Symbol("uniqueId");
// let bigNumber:bigint = 9007199254740993n;

// 3. Обчислити периметр трикутника
// let a = parseFloat(prompt('a=')!)
// let b = parseFloat(prompt('b=')!)
// let c = parseFloat(prompt('c=')!)

// let p = a + b + c 
// document.writeln(p.toString())
//--------------------
// let userName = "Andrii";
// let age = 47;
// let isAdmin = false;
// let empty = null;
// let notAssigned = undefined
// let id = Symbol('uniqueId')
// let bigNumber = 9007199254740993n;

// 4. Вводиться номер місця, яку зайняв спортсмен. Визначити нагороду (використаи оператор вибору)
//* ============= Type Inference
// Які типи даних будуть визначені?
// let city = "Kyiv”
// let temperature = 18
// let email = "test@gmail.com"
// let temperature = “number”
// let temp = “Date”
//*============ unknown
// 1. Величина випадковим чином може отримувати значенян рядка, або числа, або об’єкта .
// Реалізуйте перевірку:
// якщо прийшов рядок → вивести "Рядок довжиною: X",
// якщо число → "Квадрат числа: X",
// якщо об’єкт і в ньому є поле name → вивести "Привіт, [name]",
// в іншому випадку → "Невідомий тип даних".

// let val: unknown
// const randNum = Math.floor(Math.random() * 4)
// switch (randNum) {
//   case 1:
//     val = 'Hello'
//     break
//   case 2:
//     val = 7
//     break
//   case 3:
//     val = { p1: 11, p2: 22 }
//     break
// }
// if (typeof val === 'string') console.log(val.length)
// else if (typeof val === 'number') console.log(val * val)
// else if (typeof val === 'object') console.log('name' in val!)

// 2. Створіть масив values.Додайте у нього рядки, числа й об’єкти.Виведіть довжину масиву.

// 3. Створіть блок try..catch, у якому виконується throw "Помилка" або throw 404.У catch опишіть параметр.Виведіть у консоль:якщо рядок → "Помилка: [текст]",якщо число → "Код помилки: [число]".

//*====================== union
// 1. Користувач вводить ім’я. Якщо відмовиться, то заборонити доступ
// const userName = prompt('User name')
// let r = userName?.length
// if(userName)
//     document.writeln(`Привіт! У твоєму імені ${userName.length} букв`)
// else
//     document.writeln('Bye!')

// 2. Випадковим чином генерується 10 разів число або якийсь рядок. Підрахувати чого було більше чисел чи рядків і вивести останнє число чи останній рядок
// let stringCount = 0
// let numberCount = 0
// let val: number | string
// for (let i = 0; i < 10; i++) {
//   val = Math.random() > 0.5 ? 7 : 'ok'

//   if (typeof val === 'string') stringCount++
//   else numberCount++
//   console.log(val)
// }
// document.writeln(
//   `stringCount = ${stringCount},numberCount =${numberCount} last value = ${val!.toString()}`
// )

//*================ Literals
// 1. Потрібно ввести стать студента ("male", "female"). У залежносі від цього додати Mr, Ms.
// let gender: 'male' | 'female'
// let prefix: 'Mr' | 'Ms'

// const userName = prompt('User name')!
// let userAns = prompt('Gender (m/f)')!

// if (userAns === 'm') gender = 'male'
// else gender = 'female'

// if (gender === 'male') prefix = 'Mr'
// else prefix = 'Ms'

// document.writeln(`Hello ${prefix} ${userName}`)

// 2. Вводиться статус відповіді. Потрібно визначити рядкове представлення ("success" ,  "error")
// let statusTitle: 'success' | 'error'

// let statusNum = parseInt(prompt('Status')!)
// statusTitle = 'error'
// if (statusNum >= 200 && statusNum <= 299) statusTitle = 'success'

// document.writeln(statusTitle)

//! 3. Вводиться сума грошей і позначення валюти. Потрібно перевести кількість гривень у кількість обраної валюти ("USD" ,  "EUR" , "UAH")

//*===================== Union+Literals
//!Випадковим чином генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останні значення

//==================
// function add(val1: number, val2: number ):number {
//   return val1 + val2
// }

// const s = add(21, 34)
//*================== void (У TypeScript тип void використовується для позначення відсутності значення. Найчастіше його застосовують у функціях, які нічого не повертають.)
//-----
// function sayHello():void {
//     alert('hello')
// }
//Створити функцію, яка виводить у консоль поточну дату
// function printDate():void {
//     console.log(new Date());    
// }

