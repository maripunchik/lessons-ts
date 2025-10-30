import { DocumentStatus } from "./DocumentStatus"

export default interface IDocument {
	title: string
	content:string
	author:string
	status: DocumentStatus
}