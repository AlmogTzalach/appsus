import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
	query,
	remove,
	save,
	get,
}

function query() {
	return storageService.query(MAIL_KEY)
}

function remove(mailID) {
	return storageService.remove(MAIL_KEY, mailID)
}

function get(mailID) {
	return storageService.get(MAIL_KEY, mailID)
}

function save(mail) {
	if (mail.id) return storageService.put(MAIL_KEY, mail)
	else return storageService.post(MAIL_KEY, mail)
}

// function getEmptyCar() {
// 	return {
// 		id: '',
// 		vendor: '',
// 		maxSpeed: 0,
// 	}
// }

function _createMails() {
	let mails = utilService.loadFromStorage(MAIL_KEY)
	if (!mails || !mails.length) {
		mails = []
		mails.push(_createMail('Hi!', 'Hello', 'puki@yahoo.com', 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'anton@gmail.com', 'shuki@muki.com'))
		mails.push(_createMail('Hi!', 'Hello', 'nir@yahoo.com', 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'yarden@yahoo.com', 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', 'anton@gmail.com'))
		storageService.postMany(MAIL_KEY, mails)
	}
	return mails
}

function _createMail(subject, body, from, to) {
	return {
		id: utilService.makeId(),
		subject,
		body,
		from,
		to,
		created: new Date(),
		isRead: false,
	}
}

// function _createCar(vendor, maxSpeed = 250) {
// 	const car = {
// 		id: utilService.makeId(),
// 		vendor,
// 		maxSpeed,
// 	}
// 	return car
// }
