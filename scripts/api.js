export const indexPerson = () => {
    fetch(`http://localhost:8000/people`)
}

export const createPerson = (data) => {
    return fetch(`http://localhost:8000/people`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showPerson = (id) => {
    return fetch(`http://localhost:8000/people/${id}`)
}