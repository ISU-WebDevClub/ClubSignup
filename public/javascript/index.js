function submitEmail() {
    let input = document.getElementById("Email");

    let email = input.value;
    input.value = "";
    
    // localStorage.setItem(i, email);
    addItemToStorage("emails",{ "email": email});
}