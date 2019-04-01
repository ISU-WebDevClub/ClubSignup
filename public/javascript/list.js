function tableEmails() {
    let json = getItemsFromStorage("emails");
    console.log(json);
    let table = document.getElementById("table");
    json.forEach((row, index) => {
        table.innerHTML += `
        <tr>
            <td>${index+1}.</td>
            <td>${row.email}@iastate.edu</td>
            <td><a href="/edit?id=${index}">Edit</a> | <a href="/details?id=${index}">Details</a> | <a href="/delete?id=${index}">delete</a></td>
        </tr>`;
    });
}