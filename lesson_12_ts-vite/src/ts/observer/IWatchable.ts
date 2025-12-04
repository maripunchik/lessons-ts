import type { ObserverFunc } from "./type";

export interface IWatchable{
	update:ObserverFunc
}