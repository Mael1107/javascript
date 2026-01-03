import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { styles } from "./styles";

const ContactManager = () => {
    const [contacts, setContacts] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [nextId, setNextId] = useState(1)
    const [error, setError] = useState("")

    const handleAddContact = (e) => {
        e.preventDefault()

        if (inputName.trim() === "") {
            setError("⚠️ Name cannot be empty!")
            return
        }

        if (inputPhone.trim() === "") {
            setError("⚠️ Phone cannot be empty!")
            return
        }

        if (inputEmail.trim() === "") {
            setError("⚠️ Email cannot be empty!")
            return
        }

        if (!inputEmail.includes("@")) {
            setError("⚠️ Email must contain @")
            return
        }

        const newContact = {
            id: nextId,
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            isEditing: false
        }

        setContacts([...contacts, newContact])
        setInputName("")
        setInputPhone("")
        setInputEmail("")
        setNextId(nextId + 1)
        setError("")
    }

    const handleRemoveContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    const handleStartEdit = (id) => {
        setContacts(contacts.map(contact => 
            contact.id === id
            ? {...contact, isEditing: true}
            : contact
        ))
    }

    const handleSaveEdit = (id, newName, newPhone, newEmail) => {
        if (newName.trim() === "") {
            alert("⚠️ Task cannot be empty!")
            return
        }

        if (newPhone.trim() === "") {
            alert("⚠️ Phone cannot be empty!")
            return
        }

        if (newEmail.trim() === "") {
            alert("⚠️ Email cannot be empty!")
            return
        }

        if (!newEmail.includes("@")) {
            alert("⚠️ Email must contain @")
            return
        }

        setContacts(contacts.map(contact => 
            contact.id === id
            ? {...contact, 
                name: newName, 
                phone: newPhone, 
                email: newEmail, 
                isEditing: false 
            }
            : contact
        ))
    }

    const handleCancelEdit = (id) => {
        setContacts(contacts.map(contact => 
            contact.id === id 
            ? {...contact, isEditing: false}
            : contact
        ))
    }

    const handleInputChange = (field, value) => {

        if (field === "name") {
            setInputName(value)
        } else if (field === "phone") {
            setInputPhone(value)
        } else if (field === "email") {
            setInputEmail(value)
        }

        if (error) setError("")
    }

    return (
        <div style={styles.container}>
            <h1>Contact Manager App!</h1>
            <p style={styles.spam} >Application to add, edit, list on screen and remove contacts.</p>
            <ContactForm
                inputName = {inputName}
                inputPhone = {inputPhone}
                inputEmail = {inputEmail}
                onSubmit = {handleAddContact}
                onChange = {handleInputChange}
                error = {error}
            />
            <ContactList
                contacts = {contacts}
                onRemove = {handleRemoveContact}
                onStartEdit = {handleStartEdit}
                onCancelEdit = {handleCancelEdit}
                onSaveEdit = {handleSaveEdit}
            />
        </div>
    )

}

export default ContactManager