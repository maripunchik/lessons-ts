import { DocumentStatus} from "./types/DocumentStatus.js";
import IDocument from "./types/IDocument.js";

import assertNever from "../assertNever.js";


export default class Document {
	constructor(public title:string,public content:string,public author:string,public status:DocumentStatus){}
	//---
	static create(data: IDocument):Document{
		return new Document(data.title, data.content, data.author,data.status)
	}
	//---
	publish():void {
		if(this.status === DocumentStatus.REVIEW){
			this.status=DocumentStatus.PUBLISHED
		}else{
			console.log("Не можна опублікувати статус з поточного статусу:", this.status);
		}
	}
	//---
	archive():void {
		if(this.status===DocumentStatus.PUBLISHED){
			this.status=DocumentStatus.ARCHIVED
		}else{
			console.log("Архівування можливе лише після публікації. Поточний статус:", this.status);
		}
	}
	//---
	getStatusLabel():string{
		switch (this.status) {
			case DocumentStatus.DRAFT:
				return "Чернетка"
			case DocumentStatus.REVIEW:
				return "На перевірці"
					case DocumentStatus.PUBLISHED:
				return "Опубліковано"
					case DocumentStatus.ARCHIVED:
				return "В архіві"
			default:
				return assertNever(this.status)
		}
	}
	//---
	toString():string {
		return `Документ: "${this.title}"\nАвтор: ${this.author}\nСтатус: ${this.getStatusLabel()}\nЗміст: ${this.content}`
	}
}