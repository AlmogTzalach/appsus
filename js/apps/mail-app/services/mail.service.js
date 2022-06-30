import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mailDB'
const USER = 'puki@ca.com'

_createMails()

export const mailService = {
	query,
	remove,
	save,
	get,
	update,
}

function query() {
	return storageService.query(MAIL_KEY)
}

function remove(mailId) {
	return storageService.remove(MAIL_KEY, mailId)
}

function get(mailId) {
	return storageService.get(MAIL_KEY, mailId)
}

function update(mail) {
	return storageService.put(MAIL_KEY, mail)
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
		mails.push(
			_createMail(
				'Hi!',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum numquam fuga sint exercitationem laboriosam doloremque eum debitis nam saepe? Repudiandae porro quo dolor eum aspernatur enim dolorem numquam nemo?',
				USER,
				'anton@gmail.com'
			)
		)
		mails.push(_createMail('Hi!!!!', 'Hello lorem ipsum', 'anton@gmail.com', USER))
		mails.push(
			_createMail(
				'Muki invited you to GitHub',
				'You can accept or decline this invitation. You can also head over to to check out the repository or visit @AlmogTzalach to learn a bit more about them.		Thisinvitation will expire in 7 days.',
				'nir@yahoo.com',
				USER
			)
		)
		mails.push(_createMail('Hi!', 'Hello', 'yarden@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))
		mails.push(_createMail('Hi!', 'Hello', USER, 'anton@gmail.com'))
		mails.push(_createMail('Hi!', 'Hello', 'moshe@yahoo.com', USER))

		mails[0].isRead = true
		mails[2].isRead = true
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
		isStarred: false,
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
