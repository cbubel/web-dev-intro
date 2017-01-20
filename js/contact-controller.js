let contactList;

// Takes a callback that returns array of Contact objects
getContacts(contacts => {
    // When we get them back, create the ContactList
    contactList = new ContactList(contacts);

    // Render to the element in index.html
    // Not that render() is returning actual HTML as text, so we use innerHTML
    document.getElementById('app').innerHTML = contactList.render();
});