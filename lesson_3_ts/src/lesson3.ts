//* Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)

interface IStudent {
	fullName: string
	course: number
	faculty: string
}

interface IHeadStudent extends IStudent {
   groupNumber: string
}
//---
function isHeadStudent(student:IStudent):student is IHeadStudent {
	return "groupNumber" in student
}
//--- 
function printStudent(student:IStudent): void {
	console.info(`Студент:`)
	console.log(`ПІБ: ${student.fullName}`);
	console.log(`Курс: ${student.course}`);
	console.log(`Факультет: ${student.faculty}`);
	

	if(isHeadStudent(student)){
	console.info(`Староста:`)
	console.log(`Група: ${student.groupNumber}`);
	}
}
//---
const student: IStudent ={
	fullName: "Марина Мельник",
	course: 3,
	faculty: "Факультет інформатики",
}

const headStudent: IHeadStudent ={
	fullName: "Іван Іваненко",
	course: 4,
	faculty: "Факультет математики",
   groupNumber: "КД-55"
}

printStudent(student)
printStudent(headStudent)

//==============================

//* Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт. 

type Car = {
	type: "car"
	model: string
	owner : string
}

type Bus ={
	type: "bus"
	company: string
	seats: number
}

type Airplane = {
	type: "airplane"
	speed: number
	fuelType: string
}
//---
type Vehicle = Car | Bus | Airplane
//---
function printVehicleInfo(vehicle:Vehicle): void {
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
			const _exhaustiveCheck:never = vehicle
throw new Error(`Невідомий тип транспорту: ${_exhaustiveCheck}`);
	}
}
//---
console.log(`Задача 2`);

const vehicle1: Vehicle = { type: "car", model: "Tesla", owner: "Марина" };
const vehicle2: Vehicle = { type: "bus", company: "FlixBus", seats: 60 };
const vehicle3: Vehicle = { type: "airplane", speed: 850, fuelType: "керосин" };

printVehicleInfo(vehicle1);
printVehicleInfo(vehicle2);
printVehicleInfo(vehicle3);

//---never
const vehicle4 = {
	type:"train",
	speed:300,
	fuelType: "електрика"
}

// printVehicleInfo(vehicle4)


//==============================

//* Задача 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). Кожна подія може бути mandatory(обов'язковий) або optional(необов'язковий). Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.

function throwError (message:string):never {
	throw new Error(message);
}
//---
type Meeting ={
type: "meeting"
participants:string[]
}

type Deadline={
type: "deadline"
dueDate: Date
}

type Reminder ={
type: "reminder"
note: string
}

type Importance ={
	importance: "mandatory" | "optional"
}

type CalendarEvent = (Meeting | Deadline | Reminder) & Importance

type EventType = CalendarEvent["type"]
const allEventTypes: EventType[]=["meeting","deadline","reminder"]
//---
const event1: CalendarEvent ={
	type:"meeting",
	participants:["Марина", "Богдан"],
	importance: "mandatory"
}
const event2: CalendarEvent ={
	type: "deadline",
	dueDate: new Date("2025-10-30"),
	importance: "optional"
}

const event3: CalendarEvent ={
	type: "reminder",
	note: "Привітати з Днем народження",
	importance: "mandatory"
}
//---
function printCalendarEvent(event:CalendarEvent): void {
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
			throwError(`Невідомий тип події: ${JSON.stringify(event)}`)
	}
}
//---
function printEventList(events:CalendarEvent[]): void {
	events.forEach((event, index)=>{
	console.log(`Подія ${index+1}:`);
	printCalendarEvent(event)
})
}
//---
console.log(`Задача 3`);
const events:CalendarEvent[] =[event1,event2,event3]
printEventList(events)

//==============================

//* Задача 4. Є продукти: Book (має author), Electronics (має warranty(гарантія)), Clothes (має size). Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.

type Book = {
	type: "book"
	author: string
}

type Electronics = {
	type: "electronics"
	warranty: string
}

type Clothes ={
	type: "clothes"
	size: string
}

type PriceStatus ={
	status: "onSale" | "regularPrice"
}

type ShopProduct=(Book | Electronics | Clothes) & PriceStatus

type ProductType = ShopProduct["type"]
const allProductTypes: ProductType[]=["book","electronics", "clothes"]
//---
const product1: ShopProduct={
	type: "book",
	author:"Ліна Костенко",
	status: "regularPrice",
}

const product2: ShopProduct={
	type:"electronics",
	warranty: "2 роки",
	status: "onSale",
}

const product3: ShopProduct={
	type:"clothes",
	size:"M",
	status:"onSale"
}
//---
function printProductInfo(product: ShopProduct): void{
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
			throwError(`Невідомий тип продукту: ${JSON.stringify(product)}`)
	}
}
//---
console.log(`Задача 4`);

printProductInfo(product1)
printProductInfo(product2)
printProductInfo(product3)

//==============================

//* Задача 5.  У localStorage зберігається об’єкт у форматі JSON. Проаналізувати цей об'єкт є типу Product{     title:string,     price:number }

type Product ={     
	title:string,     
	price:number 
}
//---
function isObject(value:unknown): value is object {
	return  typeof value === "object" && value !== null 
}
//---
function parseJson(raw:string|null):unknown | null {
	if(!raw)return null
	try {
		return JSON.parse(raw)
	} catch (error) {
		return null
	}
}
//---
function isProduct(value:unknown):value is Product {
	if(!isObject(value)) return false

	const obj = value as {title?: unknown; price?: unknown}
	return typeof obj.title === 'string' && typeof obj.price==='number'
}
//---
function parseProduct(raw:string|null):Product|null {
const parsedProduct= parseJson(raw)
return isProduct(parsedProduct) ? parsedProduct:null
}
//---
console.log(`Задача 5`);

const product = parseProduct(localStorage.getItem("product"))

if(product){
console.log(`Валідний продукт:`, product.title, product.price);
}else{
	console.warn(`Продукт не валідний або не знайдено`)
}
//---
const demoProduct: Product = {
title: "Ноутбук ASUS",
price: 25999,
}

localStorage.setItem("product", JSON.stringify(demoProduct))
//==============================

//* Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)

type Ticket = {
	destination:string
	price:number
	passengerFullName:string
	date: Date
}
//---
type UnknownTicketFields ={
	destination?:unknown
	price?:unknown
	passengerFullName?:unknown
	date?:unknown
}
//---
function isTicket(value:unknown): value is Ticket {
	if(!isObject(value)) return false

	const obj = value as UnknownTicketFields

	const isValid= 
	typeof obj.destination==="string" &&
	typeof obj.price==="number" &&
	typeof obj.passengerFullName==="string" && 
	obj.date instanceof Date

	return isValid
}
//---
function assertIsTicket(value:unknown):asserts value is Ticket {
	if(!isTicket(value)){
		throw new Error(`Об'єкт не є валідним квитком`);
	}
}
//---
function parseTicket(raw:string|null):Ticket|null {
const parsedTicket= parseJson(raw)
	if(!parsedTicket || !isObject(parsedTicket)) return null

const obj=parsedTicket as UnknownTicketFields

if(typeof obj.date==='string'){
	obj.date=new Date(obj.date)
}
	return isTicket(obj)?obj: null
}
//---
console.log(`Задача 6`);

const ticket = parseTicket(localStorage.getItem("ticket"))
if(ticket){
console.log(`Куди: ${ticket.destination}`);
console.log(`Ціна: ${ticket.price} грн`);
console.log(`Пасажир: ${ticket.passengerFullName}`);
console.log(`Дата: ${ticket.date.toLocaleDateString()}`);
}else{
	console.warn(`Квиток не валідний або не знайдено`)
}
//---
const demoTicket: Ticket ={
	destination: "Прага",
	price: 1200,
	passengerFullName: "Іван Іваненко",
	date: new Date("2025-11-01")
}

localStorage.setItem("ticket", JSON.stringify(demoTicket))
//==============================

//* Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ). Потім на основі цього типу створити тип «менеджер оцінок» (додати методи знаходження середньої оцінки і найбільшої оцінки)

type StudentJournal ={
	math: number[]
	language: number[]
	science: number[]
}
//---
function getAllGrades(studentJournal: StudentJournal):number[]{
	return [...studentJournal.math, ...studentJournal.language, ...studentJournal.science]
}
//---
function getSumFromArrNums(arr:number[]):number {
	return arr.reduce((prevSum,number)=>prevSum+number,0)
}
//---
function getAverage(arr: number[]): number|null {
	return arr.length ? getSumFromArrNums(arr)/arr.length : null
}
//---
function getLargestValInArr(arr:number[]):number | null {
	return arr.length ? arr.reduce((prevMax, number)=>(number > prevMax ? number : prevMax)) : null
}
//---
type AssessmentManager = StudentJournal & {
	getAverage(): number | null
   getMaxGrade(): number | null
	hasGrades(): boolean
}
//---
const assessmentManager: AssessmentManager ={
	math:[10,10,11],
	language:[11,11,10],
	science:[9,9,10],

	getAverage() {
		const allGrades = getAllGrades(this)
		return getAverage(allGrades)
	},

	getMaxGrade() {
		const allGrades =getAllGrades(this)
		return getLargestValInArr(allGrades)
	},

	hasGrades(){
		return(this.math.length > 0 && this.language.length > 0 && this.science.length > 0)
	}
}
//---
console.log(`Задача 7`);
//---
function showResult(label:string, value:number | null):void {
	const result = value !== null ? value.toFixed(2) : `немає ${label}`
	console.log(result);
}
//---
if(assessmentManager.hasGrades()){
const avg = assessmentManager.getAverage()
showResult('середнього', avg)

const max = assessmentManager.getMaxGrade()
showResult('максимального', max)
}else{
	console.log(`Дані неповні. В одному чи декількох предметах немає оцінок`);
}


