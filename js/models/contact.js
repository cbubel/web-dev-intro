class Contact {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    render() {
        return `
            <li>${this.lastName}, ${this.firstName}: ${this.email}</li>
        `;
    }
}