import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const NOTES_KEY = 'notesDB'

_createNotes()

export const keepService = {
	query,
	remove,
	get,
	save,
}

function query() {
	return storageService.query(NOTES_KEY)
}

function remove(noteId) {
	return storageService.remove(NOTES_KEY, noteId)
}

function get(noteId) {
	return storageService.get(NOTES_KEY, noteId)
}
function save(note) {
	return storageService.post(NOTES_KEY, note)
}

function _createNotes() {
	let notes = utilService.loadFromStorage(NOTES_KEY)
	if (!notes || !notes.length) {
		notes = [
			{
				id: utilService.makeId(),
				type: 'noteTxt',
				info: { txt: 'Note No.1' },
			},
			{
				id: utilService.makeId(),
				type: 'noteTxt',
				info: { txt: 'Note No.2' },
			},
			{
				id: utilService.makeId(),
				type: 'noteTxt',
				info: { txt: 'Note No.3' },
			},
			{
				id: utilService.makeId(),
				type: 'noteTodos',
				info: {
					todos: [
						{
							task: 'Buy snacks',
							isDone: true,
						},
						{
							task: 'Eat snacks',
							isDone: true,
						},
						{
							task: 'Buy more snacks',
							isDone: false,
						},
					],
				},
			},
			{
				id: utilService.makeId(),
				type: 'noteImg',
				info: {
					title: 'What a Vue',
					src: 'https://awesome-vue.js.org/hero.png',
				},
			},
		]
		utilService.saveToStorage(NOTES_KEY, notes)
	}
	return notes
}
