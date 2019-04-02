function updateEmail() {
    let input = document.getElementById("Email");

    let email = input.value;
    
    updateItemInStorage("emails", id, {"email": email});

    document.location.replace("/list");
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let value = getItemFromStorage('emails', id);

document.getElementById("Email").value = value.email;



