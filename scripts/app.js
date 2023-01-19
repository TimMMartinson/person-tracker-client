import { indexPerson, createPerson, showPerson } from './api.js'
import {
	onIndexPersonSuccess,
	onFailure,
	onCreatePersonSuccess,
	onShowPersonSuccess,
} from './ui.js'

const createPersonForm = document.querySelector('#create-person-form')
const indexPersonContainer = document.querySelector('#index-person-container')

indexPerson()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexPersonSuccess(res.people)
    })
    .catch(onFailure)


createPersonForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const personData = {
			character: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				age: event.target['age'].value,
				favoriteFood: event.target['favoriteFood'].value,
			},
		}

    createPerson(personData)
			.then(onCreatePersonSuccess)
			.catch(onFailure)
})

indexPersonContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    showPerson(id)
			.then((res) => res.json())
			.then((res) => onShowPersonSuccess(res.person))
			.catch(onFailure)
})