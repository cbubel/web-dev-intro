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
            <a class="list-group">${output}</a>
        `;
    }

    select(id) {
        this.selected = id;
        document.getElementById('app').innerHTML = this.render();
    }
}