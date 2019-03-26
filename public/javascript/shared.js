
function addItemToStorage(key, object) {
    let json = JSON.parse(localStorage.getItem(key));
    
    if (!json) {
        json = [];
    }

    json.push(object);

    localStorage.setItem(key, JSON.stringify(json));
}

function getItemFromStorage(key){
    let json = JSON.parse(localStorage.getItem(key));
    
    if (!json) {
        json = [];
    }

    return json;
}
