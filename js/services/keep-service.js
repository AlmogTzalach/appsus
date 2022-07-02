import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'

const NOTES_KEY = 'notesDB'

_createNotes()

export const keepService = {
	query,
	remove,
	get,
	save,
	update,
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

function update(note) {
	return storageService.put(NOTES_KEY, note)
}

function save(note) {
	const newNote = JSON.parse(JSON.stringify(note))
	return storageService.post(NOTES_KEY, newNote)
}

function _createNotes() {
	let notes = utilService.loadFromStorage(NOTES_KEY)
	if (!notes || !notes.length) {
		notes = [
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(203, 240, 248)',
				type: 'noteTxt',
				info: { title: '', txt: 'Password: 12345678' },
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(167, 254, 235)',
				type: 'noteTxt',
				info: { title: 'Important!', txt: "Don't forget to s" },
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(175, 203, 250)',
				type: 'noteTxt',
				info: { title: '', txt: 'I parked at: Jabotinsky 18' },
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'white',
				type: 'noteTodos',
				info: {
					title: 'TODO List',
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
				isPinned: false,
				bgClr: 'rgb(205, 255, 145)',
				type: 'noteImg',
				info: {
					title: 'What a Vue',
					src: 'https://awesome-vue.js.org/hero.png',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'white',
				type: 'noteVideo',
				info: {
					title: 'Vue.js Explained in 100 Seconds',
					src: 'https://www.youtube.com/embed/nhBVL41-_Cw',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(250, 189, 3)',
				type: 'noteTxt',
				info: { title: '', txt: 'New Password: 123456789' },
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'white',
				type: 'noteTodos',
				info: {
					title: 'TODO List',
					todos: [
						{
							task: 'Fix my toilet',
							isDone: false,
						},
						{
							task: 'Call my dad to help fix my toilet',
							isDone: true,
						},
						{
							task: 'Call someone how can actually fix a toilet',
							isDone: false,
						},
					],
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(242, 139, 130)',
				type: 'noteVideo',
				info: {
					title: 'Top 10 Top 10 Lists',
					src: 'https://www.youtube.com/embed/LrZogmmpF5I',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(253, 207, 233)',
				type: 'noteImg',
				info: {
					title: 'Family Forever 💖',
					src: 'https://www.rd.com/wp-content/uploads/2019/09/156-LLC-scaled.jpg?resize=700,466',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'white',
				type: 'noteTxt',
				info: {
					title: 'NEVER USE SEMICOLONS!',
					txt: 'Unless you really want to;',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(255, 244, 118)',
				type: 'noteTodos',
				info: {
					title: 'TODO List',
					todos: [
						{
							task: 'Fix that service bug',
							isDone: true,
						},
						{
							task: 'Fix that other service bug',
							isDone: true,
						},
						{
							task: 'Fix that model bug',
							isDone: true,
						},
						{
							task: 'Fix the bugs i made while fixing bugs',
							isDone: false,
						},
					],
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'rgb(215, 174, 252)',
				type: 'noteTxt',
				info: {
					title: 'Call grandma!',
					txt: '052-5381648',
				},
			},
			{
				id: utilService.makeId(),
				isPinned: false,
				bgClr: 'white',
				type: 'noteTxt',
				info: {
					title: 'Note to self',
					txt: "Don't forget to use notes",
				},
			},
		]
		utilService.saveToStorage(NOTES_KEY, notes)
	}
	return notes
}
