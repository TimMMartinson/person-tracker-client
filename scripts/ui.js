const indexPersonContainer = document.querySelector('#index-person-container')
const messageContainer = document.querySelector('#message-container')
const showPersonContainer = document.querySelector('#show-person-container')

export const onIndexPersonSuccess = (people) => {
    people.forEach(person => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${person.firstName}  ${person.lastName}</h3>
            <button data-id="${person._id}" >Show Person</button>
        `

        indexPersonContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreatePersonSuccess = () => {
    messageContainer.innerText = 'You have created a person!'
}

export const onShowPersonSuccess = (person) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${person.firstName}  ${person.lastName}</h3>
        <p>${person.age}</p>
        <p>${person.favoriteFood}</p>
        <p>${person._id}</p>
    `
    showPersonContainer.appendChild(div)
}

