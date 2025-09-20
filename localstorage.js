const addUser = () => {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const data = (id, name);
    localStorage.setItem(id, JSON.stringify(data));

}

const gerItem = localStorage.getItem("11");
console.log(JSON.parse(gerItem));

const clearUser = () => {
    localStorage.clear();

}

