import { useState } from "react"

const ContactCard = ({ contact, onRemove, onStartEdit, onCancelEdit, onSaveEdit }) => {
    const [editName, setEditName] = useState(contact.name)
    const [editPhone, setEditPhone] = useState(contact.phone)
    const [editEmail, setEditEmail] = useState(contact.email)

    if (!contact.isEditing) {
        return (
            <li>
                <div>
                    <p>{contact.name}  </p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>

                <button onClick={() => {
                    onStartEdit(contact.id)
                }}>
                    Edit
                </button>

                <button onClick={() => {
                    onRemove(contact.id)
                }}>
                    X
                </button>
            </li>
        )
    }

    return (
        <li>
            <input 
            type="text" 
            value={editName}
            placeholder="Type new name..."
            onChange={(e) => setEditName(e.target.value)}
            autoFocus
            />

            <input 
            type="text"
            value={editPhone}
            placeholder="Type new phone..."
            onChange={(e) => setEditPhone(e.target.value)}
            />

            <input 
            type="text"
            value={editEmail}
            placeholder="Type new email..."
            onChange={(e) => setEditEmail(e.target.value)}
            />

           <div>
               <button
                    onClick={() => {
                        onSaveEdit(contact.id, editName, editPhone, editEmail)
                    }}
                >
                    Save
               </button>

               <button
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