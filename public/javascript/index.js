function submitEmail() {
    let input = document.getElementById("Email");

    let email = input.value;
    input.value = "";

    addItemToStorage("emails",{ "email": email});
    console.log(getItemFromStorage("emails"))
}
