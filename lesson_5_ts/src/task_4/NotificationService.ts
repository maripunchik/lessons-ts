import { NotificationPayload } from "./NotificationPayload";
import assertNever from "../assertNever.js";

export default class NotificationService {
	private senderName: string
	constructor(senderName: string) {
		this.senderName=senderName
	}
	//---
	sendNotification(payload: NotificationPayload): void {
		switch (payload.type) {
			case "email":
				console.log(`Email from ${this.senderName} to ${payload.recipient}: ${payload.subject}`);
				break;
		   case "sms":
			console.log(`SMS from ${this.senderName} to ${payload.phone}: ${payload.text}`);
			break
			default:
				assertNever(payload)
		}
	}
}