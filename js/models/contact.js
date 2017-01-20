class Contact {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    render() {
        return `
            <a
                href="#"
                class="list-group-item ${this.id === contactList.selected ? 'active' : ''}" onclick="contactList.select(${this.id})">
                ${this.lastName}, ${this.firstName}: ${this.email}
            </a>
        `;
    }
}