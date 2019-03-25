// function tableEmails() {
//     let json = getItemFromStorage("emails");
//     console.log(json);
//     let table = document.getElementById("table");
//     json.forEach((row, index) => {
//         table.innerHTML += `
//         <tr>
//             <td>${index}</td>
//             <td>${row.email}@iastate.edu</td>
//         </tr>`;
//     });
// }

let i = 1;

function tableEmails() {
    let len = localStorage.length;
    let key;
    let emailList = [len];
    for(key = 0; key < len; key++)
    {
        p = localStorage.getItem(key+1);
        emailList[key] = p;
    }

    var br = document.createElement('br');

    for(key = 0; key < emailList.length; key++)
    {
        document.writeln(i + ": " + emailList[key] + "<br>");
        i++;
    }
    i = 1;
}