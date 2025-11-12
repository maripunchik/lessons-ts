
export type ArrayProcessor<T> = (arr: T[])=>T | undefined

//---
export type NonEmptyArray<T> = [T, ...T[]]