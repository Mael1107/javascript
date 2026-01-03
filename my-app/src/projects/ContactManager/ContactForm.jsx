import { styles } from "./styles"

const ContactForm = ({ inputName, inputPhone, inputEmail, onSubmit, onChange, error }) => {
    return (
        <div>
            <form style={styles.containerForm} onSubmit={onSubmit}>

                <input
                style={styles.inputFields}
                type="text" 
                placeholder="Name of the contact..." 
                onChange={(e) => onChange("name", e.target.value)}
                value={inputName}
                />

                <input
                style={styles.inputFields}
                type="text" 
                placeholder="Phone of the contact..."
                onChange={(e) => onChange("phone", e.target.value)}
                value={inputPhone}
                />
                
                <input 
                style={styles.inputFields}
                type="text" 
                placeholder="Email of the contact..."
                onChange={(e) => onChange("email", e.target.value)}
                value={inputEmail}
                />
                
                <input style={styles.submitButton} type="submit" value="Add" />

                {error && <p>{error}</p>}

            </form>
        </div>
    )
}

export default ContactForm