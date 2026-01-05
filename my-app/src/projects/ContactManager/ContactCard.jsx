import { useState } from "react"
import { styles } from "./styles"

const ContactCard = ({ contact, onRemove, onStartEdit, onCancelEdit, onSaveEdit }) => {
    const [editName, setEditName] = useState(contact.name)
    const [editPhone, setEditPhone] = useState(contact.phone)
    const [editEmail, setEditEmail] = useState(contact.email)

    if (!contact.isEditing) {
        return (
            <li style={styles.contactCard}>
                <div style={styles.contactInfoContainer}>
                    <p style={styles.contactInfo}>{contact.name}</p>
                    <p style={styles.contactInfo}>{contact.phone}</p>
                    <p style={styles.contactInfo}>{contact.email}</p>
                </div>

                <button style={styles.contactCardButtons} onClick={() => {
                    onStartEdit(contact.id)
                }}>
                    Edit
                </button>

                <button style={styles.contactCardButtons} onClick={() => {
                    onRemove(contact.id)
                }}>
                    X
                </button>
            </li>
        )
    }

    return (
        <li style={styles.contactCard}>
            <input
            style={styles.contactCardEdit}
            type="text" 
            value={editName}
            placeholder="Type new name..."
            onChange={(e) => setEditName(e.target.value)}
            autoFocus
            />

            <input
            style={styles.contactCardEdit}
            type="text"
            value={editPhone}
            placeholder="Type new phone..."
            onChange={(e) => setEditPhone(e.target.value)}
            />

            <input
            style={styles.contactCardEdit}
            type="text"
            value={editEmail}
            placeholder="Type new email..."
            onChange={(e) => setEditEmail(e.target.value)}
            />

           <div style={styles.contactCardButtonsEditContainer}>
               <button
               style={styles.contactCardButtonsEdit}
                onClick={() => {
                    onSaveEdit(contact.id, editName, editPhone, editEmail)
                }}
                >
                Save
               </button>

               <button
               style={styles.contactCardButtonsEdit}
                onClick={() => {
                    onCancelEdit(contact.id)
                }}
                >
                Cancel
               </button>
           </div>
        </li>
    )
}

export default ContactCard