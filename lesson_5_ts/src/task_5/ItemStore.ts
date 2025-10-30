import Item from "./types/Item.js";

function remove(items: Item[], id:number):boolean
function remove(items: Item[], name:string):boolean
function remove(items: Item[], param: number | string):boolean

function remove(items: Item[], param: number | string): boolean{
	let index: number

	if(typeof param ==="number") {
		index = param-1
		if(index<0 || index >= items.length) return false
	}else{
		index = items.findIndex((item)=>item.name===param)
		if(index===-1)return false
	}
	items.splice(index,1)
	return true
}

export default class ItemStore {
  private static instance: ItemStore | null = null;
  private static nextId: number = 1;
  private items: Item[] = [];

  private constructor() {}
  //---
  static getInstance(): ItemStore {
    if (!ItemStore.instance) {
      ItemStore.instance = new ItemStore();
    }
    return ItemStore.instance;
  }
  //---
  add(name: string): Item {
    const item: Item = {
      id: ItemStore.nextId++,
		name}
      this.items.push(item);
      return item;
    };
  //---
  remove(param: number|string):boolean{
	return remove(this.items, param)
  }
  //---
  filterByName(term: string): Item[] {
    return this.items.filter(item=> item.name.includes(term));
  }
  //---
  getAll(): Item[] {
    return [...this.items];
  }
  //---
  toString(): string{
	return ItemStore.format(this.items)
  }
  //---
  static format(items: Item[]): string{
	return items.length===0 ? "Store is empty" : items.map((item)=>`${item.id}: ${item.name}`).join('\n')
  }
}
