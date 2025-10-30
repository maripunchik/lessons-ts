export type EmailPayload = { 
	recipient: string, 
	subject: string 
}

export type SMSPayload = { 
	phone: string, 
	text: string 
}

export type NotificationPayload = 
| ({ type: 'email' } & EmailPayload) 
| ({ type: 'sms' } & SMSPayload)

