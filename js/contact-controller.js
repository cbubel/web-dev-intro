let contactList;

getContacts(contacts => {
    contactList = new ContactList(contacts);
    document.getElementById('app').innerHTML = contactList.render();
});