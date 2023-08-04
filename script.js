import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const db = getDatabase();

console.log("hello");

var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");


var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        ID : enterID.value,
        Age: enterAge.value,
    })
    .then(()=>{
        alert("Data added successfully!")
    })
    .catch((error)=>{
        alert(error)
    });
}


function FindData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findID.value))
    .then((snapshot)=>{
        if (snapshot.exists()) {
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
}

function UpdateData() {
    update(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        Age: enterAge.value
    })
    .then(()=>{
        alert("Data updated successfully!!");
    })
    .catch((error)=>{
        alert(error)
    });
}

function RemoveData() {
    remove(ref(db, "People/" + enterID.value))
    .then(()=>{
        alert("Data removed successfully!");
    })
    .catch((error)=>{
        alert(error);
    })
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
removeBtn.addEventListener("click", RemoveData);
findBtn.addEventListener("click", FindData);

