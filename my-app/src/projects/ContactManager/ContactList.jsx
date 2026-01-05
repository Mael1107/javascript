import ContactCard from "./ContactCard"
import { styles } from "./styles"

const ContactList = ({ contacts, onRemove, onStartEdit, onCancelEdit, onSaveEdit }) => {

    if (contacts.length === 0) {
        return (
            <p style={styles.spam}>No contacts have been added yet!</p>
        )
    }
    
    return (
        <div>
            <ul style={styles.listContainer}>
                {contacts.map(contact => (
                    <ContactCard
                        contact = {contact}
                        onRemove = {onRemove}
                        onStartEdit = {onStartEdit}
                        onCancelEdit = {onCancelEdit}
                        onSaveEdit = {onSaveEdit}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ContactList