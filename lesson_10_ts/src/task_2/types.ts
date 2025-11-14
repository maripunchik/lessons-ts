
// Налаштування гри GameSettings (швидкість, рівень, тип ворогів). 

export type BaseGameSettings ={
	speed: number
	level: number
	enemyType: string
}
//---
export type GameSettings = Partial<BaseGameSettings>
//---
// Потім на  основі цього типу створити тип, що не можна змінювати під час гри.
export type FixedGameSettings = Required<BaseGameSettings>

//---

export type FieldLabels<T>=Partial<Record<keyof T, string>>
