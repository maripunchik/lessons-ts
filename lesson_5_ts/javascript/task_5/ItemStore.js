function remove(items, param) {
    let index;
    if (typeof param === "number") {
        index = param - 1;
        if (index < 0 || index >= items.length)
            return false;
    }
    else {
        index = items.findIndex((item) => item.name === param);
        if (index === -1)
            return false;
    }
    items.splice(index, 1);
    return true;
}
class ItemStore {
    constructor() {
        this.items = [];
    }
    //---
    static getInstance() {
        if (!ItemStore.instance) {
            ItemStore.instance = new ItemStore();
        }
        return ItemStore.instance;
    }
    //---
    add(name) {
        const item = {
            id: ItemStore.nextId++,
            name
        };
        this.items.push(item);
        return item;
    }
    ;
    //---
    remove(param) {
        return remove(this.items, param);
    }
    //---
    filterByName(term) {
        return this.items.filter(item => item.name.includes(term));
    }
    //---
    getAll() {
        return [...this.items];
    }
    //---
    toString() {
        return ItemStore.format(this.items);
    }
    //---
    static format(items) {
        return items.length === 0 ? "Store is empty" : items.map((item) => `${item.id}: ${item.name}`).join('\n');
    }
}
ItemStore.instance = null;
ItemStore.nextId = 1;
export default ItemStore;
