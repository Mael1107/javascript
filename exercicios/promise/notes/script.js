const fetchNotes = new Promise((resolve, reject) => {
    const studentNotes = [8,7,9]
    const success = true

    if (success) {
        resolve (studentNotes)
    } else {
        reject ("ERROR! Please try again.")
    }
})

fetchNotes
    .then(notes => {
        console.log(`Notes of the student: ${notes}`)
    })
    .catch(error => {
        console.log(error);
        
    })