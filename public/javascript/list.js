function tableEmails() {
    let json = getItemFromStorage("emails");
    console.log(json);
    let table = document.getElementById("table");
    json.forEach((row, index) => {
        table.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${row.email}@iastate.edu</td>
        </tr>`;
    });
}
