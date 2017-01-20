function getContacts(giveback) {
    // Standard XHR
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4) {
            // Turn JSON text into actual array of objects
            const parsedJson = JSON.parse(this.responseText);
            let contacts = [];

            // Cast plain objects into actual Contact objects
            for(const c of parsedJson) {
                contacts.push(Object.assign(new Contact(), c));
            }

            // Callback through which we return the contacts
            giveback(contacts);
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}