function addItemToStorage(key, object) {
    let json = JSON.parse(localStorage.getItem(key));

    if (!json) {
        json = [];
    }

    json.push(object);

    localStorage.setItem(key, JSON.stringify(json));
}

function getItemsFromStorage(key) {
    let json = JSON.parse(localStorage.getItem(key));

    if (!json) {
        json = [];
    }

    return json;
}

function getItemFromStorage(key, index) {
    let json = JSON.parse(localStorage.getItem(key));

    if (!json) {
        return null;
    }

    return json[index];
}

function updateItemInStorage(key, index, value){
    let json = JSON.parse(localStorage.getItem(key));

    if (!json) {
        return null;
    }

    json[index] = value;

    localStorage.setItem(key, JSON.stringify(json));
}