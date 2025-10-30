import assertNever from "../assertNever.js";
export default class NotificationService {
    constructor(senderName) {
        this.senderName = senderName;
    }
    //---
    sendNotification(payload) {
        switch (payload.type) {
            case "email":
                console.log(`Email from ${this.senderName} to ${payload.recipient}: ${payload.subject}`);
                break;
            case "sms":
                console.log(`SMS from ${this.senderName} to ${payload.phone}: ${payload.text}`);
                break;
            default:
                assertNever(payload);
        }
    }
}
