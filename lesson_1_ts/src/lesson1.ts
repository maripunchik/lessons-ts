//* Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data»("field2Data"). Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.

type PrimitiveType = string | number

function validateFieldType(value: unknown, fieldName: string): PrimitiveType {
	if(typeof value === "string" || typeof value === 'number'){
		return value
	}else{
		throw new Error(`Неправильний тип для поля ${fieldName}: отримано ${typeof value}`);
	}
}

const raw = localStorage.getItem('field2Data')
if(raw) {
	try {
		const obj= JSON.parse(raw)
		const field2=validateFieldType(obj.field2, 'field2')

		let result1 = ''
		if(typeof field2 === 'string') {
			result1=`Поле ${field2} є рядком довжиною ${field2.length}`
		}else{
			const evenOrOddNum: 'парне' | 'непарне' = field2 % 2 === 0 ? 'парне' : 'непарне'
         result1=`Поле ${field2} є числом, воно ${evenOrOddNum}`
		}
   console.log(result1);
	} catch (error) {
				if(error instanceof Error){
		console.log(error.message);
		}else{console.log(String(error))}
	}
}
//---
localStorage.setItem('field2Data',JSON.stringify({field2:77}))
// localStorage.setItem('field2Data',JSON.stringify({field2:"тест"}))

// =======================================================

//* Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data»("userInfoData"). Вивести на екран усі поля та їх значення.

const userInfo={
	name:'Ivan',
	age: 30,
	isAdmin:true,
	skills:['JS','TS']
}
//---
localStorage.setItem('userInfoData',JSON.stringify(userInfo))

function displayLocalStorageObject(key:string, displayElementId:string='display'):void {
	const rawData=localStorage.getItem(key)
	if(!rawData){
		console.log(`Дані з ключем "${key}" не знайдено в localStorage`);
		return
	}
	try {
		const obj =JSON.parse(rawData)

		if(typeof obj!=='object'||obj===null){
			throw new Error(`Значення за ключем ${key} не є об'єктом`);
		}
		let result2 =`Дані з ключем "${key}":\n`

		for (const key of Object.keys(obj)) {
			result2+=`${key}:${obj[key]}\n`
		}

		console.log(result2);
		
		const displayEl = document.getElementById(displayElementId)
		if(displayEl){
			displayEl.innerText=result2
		}
	} catch (error) {
		if(error instanceof Error){
		console.log(error.message);
		}else{console.log(String(error))}
	}
}
//---
displayLocalStorageObject('userInfoData')



//=====================================================

//* Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.

type Product = {
	name: string,
	price: number,
	quantity: number,
}
//---
const calculateProductTotal= (product: Product): number =>
	product.price*product.quantity
//---
const calculateTotal=(products:Product[]):number=>
	products.reduce((sum, product)=>sum+calculateProductTotal(product),0)
//---
const generateReceipt=(products:Product[]):string=>{
	const lines=products.map(product=>{
		const total = calculateProductTotal(product)
		return `${product.name} - ${product.quantity} x ${product.price.toFixed(2)} = ${total.toFixed(2)} грн`
	})

	const receipt=[
		"Фіскальний чек",
		"*********",
		...lines,
		"*********",
		`Загальна сума: ${calculateTotal(products).toFixed(2)} грн`,
	].join("\n")

	return receipt
}
//---
const products: Product[]=[
	{ name: "Молоко", price: 32.5, quantity: 2 },
  { name: "Хліб", price: 18.0, quantity: 3 },
]
console.log(generateReceipt(products));
//---
const receiptEl = document.getElementById('receipt')
if(receiptEl) {
	receiptEl.innerText=generateReceipt(products)
}

//* Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.

if(confirm("Запустити задачу №4?")){

type DayNameString ='sun'| 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'
type DayNameNumber = 0| 1 | 2 | 3 | 4 | 5 | 6
type DayName = DayNameString | DayNameNumber

const dayNames: DayNameString[] = ['sun', 'mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat']
const workingDaysStr: DayNameString[] = ['mon' , 'tue' , 'wed' , 'thu' , 'fri']
const workingDaysNum: DayNameNumber[] =[1 , 2 , 3 , 4 , 5]
//---
const isWorkingDay=(day: DayName):boolean => typeof day === 'string' ? workingDaysStr.includes(day): workingDaysNum.includes(day)
//---
const isDayNameNumber=(value: number):value is DayNameNumber=>value>= 0 && value<dayNames.length
//---
const checkDay=():void =>{
const showDay=document.getElementById('dayResult')
const userInputDay=prompt(`Введіть назву (mon-sun) дня або номер дня (1-7)`)?.trim()?.toLowerCase();

if(!showDay || !userInputDay) return

	const parsed = parseInt(userInputDay)

	let day: DayName | undefined 
	const matched = dayNames.find(name=>name===userInputDay)
	if(matched){
		day=matched
	}else if (!isNaN(parsed) && isDayNameNumber(parsed-1)) {
			day=parsed-1
		}

		if(day!==undefined){
			const result3 = isWorkingDay(day) ? 'Це робочий день' : 'Це вихідний'
			showDay.innerText=`${userInputDay} - ${result3} `
		}else{
			showDay.innerText=`${userInputDay} - Некоректне значення дня`
			showDay.style.color='red'
		}
	}
//---
window.onload=()=>{
checkDay()
}
}
//* Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення

	let numberCount=0
let stringOkCount=0
let lastValue: number | 'Ok'='Ok'

function generateAndCompare(iterations:number=10): void{

for (let i = 0; i < iterations; i++) {
	lastValue=Math.random()>0.5 ? 5 : 'Ok'
	
	if (lastValue === 'Ok') {
		stringOkCount++
	}else {
      numberCount++
	}
	console.log(`Згенеровано: ${lastValue}`);
}
const moreOfWhat = numberCount>stringOkCount? 'чисел':'рядків "Ok"'

console.log(`Було більше ${moreOfWhat}`);
console.log(`Останнє значення: ${lastValue}`);

const lastVal = document.getElementById('lastVal')
if(lastVal) {
	lastVal.innerText=`Було більше ${moreOfWhat}.\n Останнє значення: ${lastValue} `
}
}
//---
generateAndCompare()

//================================

//* Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. 

if(confirm("Запустити задачу №6?")){
type Currency = "USD" | "EUR" | "UAH"

type Rates = {
	USD: number;
	EUR: number;
	UAH: number;
}

function convertCurrency(currency:Currency,sum:number,rates:Rates):string {
	const fromRate=rates[currency]
	let result = `Ви ввели: ${sum} ${currency}\n`
	
	const allCurrencies: Currency[]=["USD","EUR","UAH"]
	for (let i = 0; i < allCurrencies.length; i++) {
		const targetCurrency=allCurrencies[i]
		if(targetCurrency===currency)continue

		const toRate=rates[targetCurrency]
		const converted = (sum*fromRate)/toRate

		result+= `У ${targetCurrency}: ${converted.toFixed(2)} ${targetCurrency}\n`
	}
	return result
}
//---
function handleUserInput(rates:Rates): void {
	const userInput = prompt("Оберіть валюту: USD | EUR | UAH")?.toUpperCase().trim() ?? ""
	const sum= parseFloat(prompt("Введіть суму грошей") ?? "0")

	const result5 = document.getElementById("convertRes")
	if(!result5) return

	if(userInput==="USD" || userInput==="EUR" || userInput==="UAH"){
		const currency: Currency=userInput
		const resultText=convertCurrency(currency,sum,rates)
		result5.innerText=resultText
	}else{
		result5.innerText="Некоректна валюта"
	}
}
//---
const rates: Rates={
	USD: 42,
	EUR: 46,
	UAH: 1,
}
//---
handleUserInput(rates)
}