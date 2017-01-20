class ContactList {
    // Default to empty array
    constructor(contacts = []) {
        this.title = 'Contacts';
        this.contacts = contacts;
    }

    render() {
        let output = '';

        for(const contact of this.contacts) {
            output += contact.render(); // Calls contact.js render()
        }

        return `
            <h1>${this.title}</h1>
            <ul>${output}</ul>
        `;
    }
}