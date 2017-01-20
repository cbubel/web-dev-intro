let contactList;

// Takes a callback that returns array of Contact objects
getContacts(contacts => {
    // When we get them back, create the ContactList
    contactList = new ContactList(contacts);
    contactList.render();
});

