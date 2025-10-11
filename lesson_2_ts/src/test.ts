//*============ never
// З клавіатури номер робочого дня. Ввисти скільки залишилось до кінця тижня. Передбачати генерування виключних ситуацій якщо номер дня некоректний і коли номер дня коректний, але це не є робочим днем (використати функцію з never для генерування виключиних ситуацій)

// function throwError(message: string): never {
//   throw new Error(message)
// }

// function getLastWorkingDays(day: number): number {
//   if (day < 1 || day > 7) throwError('Некоректний день тижня')
//   if (day > 5) throwError('Некоректний робочий день')
//   return 6 - day
// }

// document.write(getLastWorkingDays(3).toString())
//------------------------------------
// З клавіатури вводиться пора року. Створити функцію, яка виводить у консоль  рекомндований одяг (використати never).
// type Season = 'winter' | 'spring' | 'summer' | 'fall'

// function getCloth(season: Season): string {
//   let res: string
//   switch (season) {
//     case 'winter':
//       res = 'Пальто'
//       break
//     case 'spring':
//       res = 'Куртка'
//       break
//     case 'summer':
//       res = 'Майка'
//       break
//     case 'fall':
//       res = 'Дощовик'
//       break
//     default:
//       const _exCheck: never = season //exhaustiveness check
//       throw new Error('Невірно вказана пора року!')
//   }
//   return res
// }

// document.write(getCloth('spring'))

//*============ overloading

//=======================================

//* - JavaScript не підтримує перевантаження функцій (function overloading) як у TypeScript 
//* - Коли оголошуємо fun1 вдруге — попереднє визначення повністю перезаписується.
//* - Тобто fun1() більше не існує — залишилась тільки версія з name.

// function fun1() {
// 	document.writeln('Ok')
// }
// //---
// function fun1(name) {
// 	document.writeln(name)
// }
// fun1('Ivan')
//-----
//* TypeScript дозволяє перевантаження функцій через оголошення сигнатур:
// function fun1(): void;
// function fun1(name: string): void;
// function fun1(name?: string): void {
//   if (name) {
//     document.writeln(name);
//   } else {
//     document.writeln('Ok');
//   }
// }

// - TypeScript перевіряє типи аргументів на етапі компіляції.
// - Можна викликати fun1() або fun1('Ivan'), і обидва варіанти будуть типово коректні.
// - У JavaScript після компіляції залишиться лише одна реалізація — але TS гарантує правильність викликів.

// // Передається або номер дня, або назву дня на англійькій. Треба сказати чи вихідний чи робочий.
// //----- 1. Можливі сигнатури методів
// function isWorkingDay(day: number): boolean
// function isWorkingDay(day: string): boolean
// //----- 2. Реалізація
// function isWorkingDay(day: number | string): boolean {
//   if (typeof day === 'number') return day >= 1 && day <= 7
//   else if (typeof day === 'string')
//     return ['mon', 'tue', 'wen', 'thu', 'fri'].includes(day)
//   throw new Error('Невірний тип дня')
// }

// document.write(isWorkingDay(3).toString())
//-----------
// Передається або номер дня, або назву дня на англійькій. Треба повертати  номер наступного дня (якщо число), або першу літеру (якщо назва)
// //----- 1. Можливі сигнатури методів
// function isWorkingDay(day: number): number
// function isWorkingDay(day: string): string
// //----- 2. Реалізація
// function isWorkingDay(day: number | string): number | string {
//   if (typeof day === 'number') return (day % 7) + 1
//   else if (typeof day === 'string') return day[0]
//   throw new Error('Невірний тип дня')
// }

// document.write(isWorkingDay(3).toString())

//*============= array
// Планувальник відпусток. Дано масив імен водіїв і масив номерів, коли можна йти у відпустку. Потрібно випадково вибрати ім’я водія і випадково вибрати номер місяця для відпустки.

// let drivers: string[]
// drivers = prompt('Ведіть імена водіїв')?.split(' ') ?? []
// let vacMonths: number[]
// vacMonths = prompt('Введіть номери місяців')!
//   .split(' ')
//   .map((m) => Number(m))

// const randDrIndex = Math.floor(Math.random() * drivers.length)
// const drName = drivers[randDrIndex]

// const randMonthIndex = Math.floor(Math.random() * vacMonths.length)
// const vacMonth = vacMonths[randMonthIndex]

// document.write(`${drName} - ${vacMonth}`)

//*============= array (union)
// Сформувати масив значень ігрового барабана. Це або виграшна сума, або «Пауза», «Банкрот», «Супер приз»
// type gameItemType = number | 'Пауза' | 'Банкрот' | 'Супер приз'
// let gameList: gameItemType[]

// function getGameField(cellCount: number): gameItemType[] {
//   const list: gameItemType[] = []
//   for (let i = 0; i < cellCount; i++) {
//     const randChoiseNumber = Math.floor(Math.random() * 5)
//     switch (randChoiseNumber) {
//       case 1:
//         const randNum = 100 + Math.floor(Math.random() * 5000)
//         list.push(randNum)
//         break
//       case 2:
//         list.push('Пауза')
//         break
//       case 3:
//         list.push('Банкрот')
//         break
//       case 4:
//         list.push('Супер приз')
//         break
//     }
//   }
//   return list
// }

// const arr: gameItemType[] = getGameField(7)
// console.log(arr)

// document.write(arr.toString())
//*============= array
// Сформувати двовимірний масив (5*5) ігрового поля. Усі елементи нулі, або 1-корабель (4 штуки), або ‘block’- земля (5 штук)
// type cellType = 0 | 1 | 'block'
// type gameField = cellType[][]

// function getZeroMatrix(rowNum: number, colNumber: number): gameField {
//   const matrix: gameField = []
//   for (let i = 0; i < rowNum; i++) {
//     matrix.push(new Array(colNumber).fill(0))
//   }
//   return matrix
// }

// function setInRandomPosition(
//   val: cellType,
//   valNumber: number,
//   matrix: gameField
// ): void {
//   for (let i = 0; i < valNumber; ) {
//     const randRowIndex = Math.floor(Math.random() * matrix.length)
//     const randColIndex = Math.floor(Math.random() * matrix[0].length)
//     if (matrix[randRowIndex][randColIndex] === 0) {
//       matrix[randRowIndex][randColIndex] = val
//       i++
//     }
//   }
// }

// function generateGameField(
//   rowNum: number,
//   colNumber: number,
//   shipNum: number,
//   groundNum: number
// ): gameField {
//   const gameFieldMatrix: gameField = getZeroMatrix(rowNum, colNumber)
//   setInRandomPosition(1, shipNum, gameFieldMatrix)
//   setInRandomPosition('block', groundNum, gameFieldMatrix)
//   return gameFieldMatrix
// }

// console.log(generateGameField(5, 5, 4, 6))

//* =========== Tuple
// Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
// Дано масив маркерів на картів [lat, long, city]. Визначити найближче місто до вказаних координат
// type Marker = [number, number, string]

// function getMarkersList(markersNumber: number): Marker[] {
//   const markersList: Marker[] = []
//   for (let i = 0; i < markersNumber; i++) {
//     const data = prompt('Введіть координати і назву через пробіл')!.split(' ')
//     markersList.push([Number(data[0]), Number(data[1]), data[2]])
//   }
//   return markersList
// }

// // function geClosestPalce(lat:number, long:number ):Marker {
// // ЗАКІНЧИТИ !!!
// // }

// console.log(getMarkersList(3))

//* ========== Enum
// Створіть enum TrafficLight зі значеннями "Red", "Yellow", "Green"

// type TrafficLight = 'Red' | 'Yellow' | 'Green'
// enum TrafficLight {
//   Red = 1,
//   Yellow = 2,
//   Green = 3,
// }

// const a: TrafficLight = TrafficLight.Red

// console.log(Object.values(TrafficLight))

// Потрібно ввести стать студента ("male", "female"). У залежносі від цього додати Mr, Ms.

// enum Gender {
//   Male,
//   Female,
// }

// let userName = prompt('Введіть ім"я')!
// const gender: Gender =
//   prompt('Введіть стать (m/f)') === 'm' ? Gender.Male : Gender.Female

// switch (gender) {
//   case Gender.Male:
//     userName = 'Mr.' + userName
//     break
//   case Gender.Female:
//     userName = 'Ms.' + userName
//     break
// }

// document.write(userName)

// Вводиться статус відповіді. Потрібно визначити рядкове представлення ("success" ,  "error")

//=============================================
// Вводиться сума грошей і позначення валюти. Потрібно перевести кількість гривень у кількість обраної валюти ("USD" ,  "EUR" , "UAH")
// enum Currency {
//   USD = 'usd',
//   EUR = 'eur',
// }

// const USD_RATE = 42
// const EUR_RATE = 48

// const moneyGrn = Number(prompt('Введіть кількість гривень'))
// const currency: Currency =
//   prompt('Введіть валюту (usd/eur)') === 'usd' ? Currency.USD : Currency.EUR

// let convertedCurrency
// switch (currency) {
//   case Currency.USD:
//     convertedCurrency = moneyGrn / USD_RATE
//     break
//   case Currency.EUR:
//     convertedCurrency = moneyGrn / EUR_RATE
//     break
//   default:
//     const _aa: never = currency
// }

// const ob = {
//   [Currency.USD]: 1,
//   [Currency.EUR]: 266,
// }

// console.log(ob)

// document.write(convertedCurrency!.toFixed(2))
