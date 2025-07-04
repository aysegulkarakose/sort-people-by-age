const people = [
    { name: "A", lastname: "K", city: "A", age: 25 },
    { name: "B", lastname: "L", city: "G", age: 38 },
    { name: "C", lastname: "M", city: "F", age: 46 },
    { name: "D", lastname: "N", city: "D", age: 10 },
    { name: "E", lastname: "O", city: "P", age: 2 }
]
function findPerson() {
    const findId = document.getElementById("findid");
    const results = document.getElementById("resultsContainer");
    const query = findId.value;

    const enteredAge = !isNaN(query) ? Number(query) : null;
    const enteredCity = isNaN(query) ? query.toLowerCase() : null;

    if (query === "") {
        alert("please enter age or city");
        return;
    }
    results.innerHTML = "";
    let filtered = [];
    if (enteredAge !== null) {
        filtered = people.filter(person => person.age > enteredAge);

        if (filtered.length === 0) {
            const li = document.createElement("li");
            li.textContent = "there is no age older than this";
            results.appendChild(li);
            return;
        }
    }
    else if (enteredCity !== null) {
        filtered = people.filter(person => person.city.toLowerCase() === enteredCity.toLowerCase());
        if (filtered.length === 0) {
            const li = document.createElement("li");
            li.textContent = "there is no city found";
            results.appendChild(li);
            return;
        }
    }
    filtered.forEach(person => {
        const li = document.createElement("li");
        li.textContent = `${person.name} ${person.lastname} ${person.city} ${person.age}`;
        results.appendChild(li);
    }
    )

    findId.value = "";
}
function addPerson() {
    const addName = document.getElementById("addName");
    const addLastname = document.getElementById("addLastname");
    const addAge = document.getElementById("addAge");
    const addCity = document.getElementById("addCity");
    const isim = addName.value;
    const soyisim = addLastname.value;
    const yas = addAge.value;
    const sehir = addCity.value;
    const newPerson = {
        name: isim,
        lastname: soyisim,
        city: sehir,
        age: Number(yas)
    }
    if (isNaN(yas)) {
        alert("please enter a number");
        clearBox();
        return;
    }
    if (!isNaN(sehir) || !isNaN(isim) || !isNaN(soyisim)) {
        alert("please enter a valid name");
        clearBox();
        return;
    }
    people.push(newPerson);
    updatePeopleList();
    clearBox();
}
function clearBox() {
    document.getElementById("addName").value = "";
    document.getElementById("addLastname").value = "";
    document.getElementById("addCity").value = "";
    document.getElementById("addAge").value = "";
}
function updatePeopleList() {
    const peopleContainer = document.getElementById("peopleContainer");
    peopleContainer.innerHTML = "";
    const sorted = [...people].sort((a, b) => a.age - b.age);
    sorted.forEach(person => {
        const li = document.createElement("li");
        li.textContent = `${person.name} ${person.lastname} ${person.city} ${person.age}`;
        peopleContainer.appendChild(li);
    });
}
window.onload = function () {
    updatePeopleList();
}