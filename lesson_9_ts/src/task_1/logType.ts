
import type { ArrayProcessor } from "./types/types.js"; 

export default function logType<T>(label: string,array:T[],  processor: ArrayProcessor<T>):void {
	
   const value = processor(array)
	const type = typeof value
	console.log(`${label} = [${array.join(", ")}] - Тип: ${type}, Значення: ${value}`);
	}
	
