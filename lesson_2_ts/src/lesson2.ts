if (confirm("Почати тестування?")) {
//* Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.

const seasonTuple:[number,string][]=[[3,'spring'],
[6,'summer'],
[9,'fall'],
[12,'winter'],
]

function throwError (message:string):never {
	throw new Error(message);
}
//---
function getSeasonByStartMonth(month:number):string {
	if(month <1 || month>12)throwError('Некоректний номер місяця')
const entry=seasonTuple.find(([m])=>m===month)
	if(!entry) throwError('Це не перший місяць пори року')
		return entry[1]
}
//---
const inputMonth= parseInt(prompt('Введіть номер місяця (3,6,9,12):') || '0')

const displaySeason = document.getElementById('season')
	if(displaySeason) {
		try {
			displaySeason.innerText=`${inputMonth} - ${getSeasonByStartMonth(inputMonth)}`
			} catch (error) {
			displaySeason.innerText=(error as Error).message
		}
}
//==================================

//* Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа. 

function getLastDigitOrSymbolOfNumber(input:string|number):string {
	if(typeof input === 'number'){
		const lastDigit=Math.abs(input)%10
		return lastDigit.toString()
	}
	if(typeof input==='string'){
		if(input.length===0)return throwError('Рядок порожній')
			return input[input.length-1]
	}
	return throwError('Непідтримуваний тип')
}
//---
console.log(`Задача 2`);
console.log(`Остання цифра: ${getLastDigitOrSymbolOfNumber(123456)}`);
console.log(`Останній символ: ${getLastDigitOrSymbolOfNumber('hi')}`);
// console.log(getLastDigitOrSymbolOfNumber('')); // помилка

//=================================================

//* Задача 3. Вводиться номер місяця або назва місяця. Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.

enum SeasonEnum {
	Winter=1,
	Spring=2,
	Summer=3,
	Fall=4
}
//---
function getSeason(month:number):number 
function getSeason(month:string):string
function getSeason(month:number | string):number |string {
	const monthNames =[
		'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
	]

	let monthNumber=typeof month ==='string' ? monthNames.indexOf(month.toLowerCase())+1 : month

	if (!Number.isFinite(monthNumber) || monthNumber%1!==0 || monthNumber <1  || monthNumber>12) {
		throw new Error("Невірний місяць");
	}
	let seasonIndex = Math.floor(((monthNumber%12)/3))%4+1

	const seasonResult = typeof month === 'string' ? SeasonEnum[seasonIndex] : seasonIndex
	return seasonResult
	}
//---
   let input =prompt(`Введіть номер місяця або назву місяця(En)`) ?? ''
	const parsed = parseInt(input)
	const isNumber =!isNaN(parsed)

	try {
		const result=isNumber ? getSeason(parsed) : getSeason(input.toLowerCase())
      console.log(`Задача 3`);
		console.log(`${input} - ${result}`);
	} catch (error) {
		console.error((error as Error).message)
	}
	
//===============================================

//* Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. Підрахувати чого було більше: святкових чи вихідних.

type Day = number | string

const weekends =['Субота', 'Неділя']
const holidays = ['Різдво', 'Новий рік','Великдень','День Незалежності']

function getRandomFromArray(arr:string[]): string {
	return arr[Math.floor(Math.random()*arr.length)]
}
//---
function generateAndCountDays(size:number):[number,number] {
	let weekendCount =0
	let holidayCount=0
	const days: Day[] =[]

	for (let i = 0; i < size; i++) {
		const type = Math.floor(Math.random()*3)
		let day:Day

		if(type===0){
			day=Math.floor(Math.random()*5)+1
		}else if(type===1){
			day=getRandomFromArray(weekends)
      weekendCount++
		}else{
			day=getRandomFromArray(holidays)
			holidayCount++
		}
		days.push(day)
	}
	return [weekendCount,holidayCount]
}
	//---
	function compareDaysCount(weekendCount:number, holidayCount:number):string {
		if(weekendCount>holidayCount)
		return `Вихідних днів було більше`
	if(holidayCount>weekendCount)return `Святкових днів днів було більше`
	return `Кількість святкових і вихідних днів однакова`;
	}
//---
const [weekendCount,holidayCount]=generateAndCountDays(366)
const resultOfCompareDays = compareDaysCount(weekendCount, holidayCount)
console.log(`Задача 4`);
console.log(`святкових: ${holidayCount}, вихідних: ${weekendCount}, ${resultOfCompareDays}`);

//=============================
//* Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими

enum SetOfSettings {
	Enabled = 'enabled',
	Disabled = 'disabled'
}

const settings: [string, SetOfSettings][]=[
	["soundEffects", SetOfSettings.Enabled],
	["voiceControl", SetOfSettings.Disabled],
	["saveHistory", SetOfSettings.Enabled],
	["autoUpdate", SetOfSettings.Disabled],
	["emailUpdates", SetOfSettings.Enabled],
]
//---
function getEnabledSettings(pairs:[string, SetOfSettings][]): string[] {
	const result:string[]=[]

	for (const [key,value] of pairs) {
		if(value === SetOfSettings.Enabled){
			result.push(key)
		}
	}

	return result
}
//---
   console.log(`Задача 5`);
const enabledKeys = getEnabledSettings(settings)
console.log(`Увімкнені налаштування: ${enabledKeys.join(', ')}`);

// ===============================

// Закінчити задачу, що ми почали на уроці. 
//* Задача 6. Дано масив маркерів на карті  [lat, long, city]. Визначити найближче місто до вказаних координат

type Coordinates = [number,number]
type Marker = [latitude:number, longitude:number, city:string]
//---
function getMarkersList(markersNumber: number): Marker[] {
  const markersList: Marker[] = []
  for (let i = 0; i < markersNumber; i++) {
    const data = prompt('Введіть координати і назву через пробіл')!.split(' ')
    markersList.push([Number(data[0]), Number(data[1]), data[2]])
  }
  return markersList
}
//---
function getDistance(a:Coordinates, b:Coordinates): number {
	return Math.hypot(a[0]-b[0], a[1]-b[1])
}
//---
function getClosestPlace(userLocation:Coordinates, markers:Marker[]):Marker {
	if(markers.length===0) throw new Error("Маркерів немає");
	
return markers.reduce((closest, marker)=> getDistance(userLocation,[marker[0],marker[1]])< getDistance(userLocation,[closest[0],closest[1]]) ? marker : closest)

}
//---
   console.log(`Задача 6`);
// const markers =getMarkersList(3)
// Дано масив маркерів на карті  [lat, long, city]
const markers: Marker[]=[
  [50.45, 30.52, 'Київ'],
  [49.84, 24.03, 'Львів'],
  [48.62, 22.30, 'Ужгород']

]
const userLocation: Coordinates = [50.00,30.00]
const closest = getClosestPlace(userLocation, markers)

console.log(`Найближче місто до (${userLocation[0]}, ${userLocation[1]}): це  ${closest[2]} (${closest[0]}, ${closest[1]})`)

//==================================
//* Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum. Можете і never якось застосувати

enum Award {
	Gold = 'Золото',
	Silver = 'Срібло',
	Bronze = 'Бронза',
	Certificate = 'Грамота',
}

type AwardCount = [Award, number]

const awardList: Award[]=[
	Award.Gold,
	Award.Silver,
	Award.Bronze,
	Award.Certificate
]
//---
function getRandomNumber(minNumber:number, maxNumber:number):number {
	return minNumber + Math.floor(Math.random()*(maxNumber-minNumber+1))
}
//---
function generateAwards(count:number): Award[] {
	const result:Award[]=[]
	for (let i = 0; i < count; i++) {
		const index = getRandomNumber(0, awardList.length-1)
		result.push(awardList[index])
	}
	return result
}
//---
function countAwards(awards:Award[]): AwardCount[] {
	let countOfGold=0
	let countOfSilver=0
	let countOfBronze=0
	let countOfCertificate=0

	for (const award of awards) {
		switch (award) {
			case Award.Gold:
				countOfGold++
				break;
				case Award.Silver:
				countOfSilver++
				break;	
				case Award.Bronze:
				countOfBronze++
				break;	
				case Award.Certificate:
				countOfCertificate++
				break;		
			default:
				const _exCheck:never=award
				throw new Error(`Невідома нагорода: ${_exCheck}`);
		}
	}
	return [
		[Award.Gold, countOfGold],
		[Award.Silver, countOfSilver],
		[Award.Bronze, countOfBronze],
		[Award.Certificate, countOfCertificate]
	]
}
//---
console.log(`Задача 7`);

const randomAwards = generateAwards(20)
console.log('Згенеровані нагороди:', randomAwards);

const summary = countAwards(randomAwards)
for (const [award, count] of summary) {
	console.log(`${award}: ${count}`);
}
}