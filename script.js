// const ulElement = document.getElementById("myUl");
// const button = document.getElementById("btn");
// const searchNew = document.getElementById("search");

// function addNew() {
//     const newli = document.createElement("li");  // creates new element using JavaScript

//     const inputtask = searchNew.value;
//     if (inputtask === "") {
//         alert("Please enter a value.");
//         return;
//     }

//     newli.textContent = searchNew.value;
//     newli.id = "id2";
//     ulElement.appendChild(newli);

    

// }
// button.addEventListener("click", addNew);
// searchNew.addEventListener("click", )4

//



// const body = document.body.addEventListener("click", function(){
//     console.log("Body is clicked");
// }, true)
// const box = document.getElementById("box").addEventListener("click", function() {
//     console.log("box is clicked");
// }, true)  
/* this is to check, if we click the button it will run touching every nodes */


const search = document.getElementById("search");
const ulElement = document.getElementById("myUl");

function addNew() {
    const newLi = document.createElement("li");
    const input = document.createElement("input");

    input.type = "checkbox";
    input.classList.add("task-checkbox");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");
    
    const inputText = search.value;
    if(inputText === ""){
        alert("Enter a To-Do first");
        return;
    }

    newLi.textContent = search.value;
    newLi.style.position = "relative";
    newLi.appendChild(input);

    input.style.position = "absolute";
    input.style.left = "-20px"

    icon.style.position = "absolute";
    icon.style.right = "20px";

    newLi.appendChild(icon);
    ulElement.appendChild(newLi);

    search.value = '';

    saveData();
    
}

ulElement.addEventListener("click", function(e) {

    if(e.target.classList.contains("fa-solid", "fa-trash")) {
        e.target.parentElement.remove()  
        saveData();
    }

    if(e.target.classList.contains("task-checkbox")) {
        const listItem = e.target.parentElement;
        
        if(e.target.checked) {
            listItem.style.textDecoration = "line-through";
            e.target.setAttribute("checked", "checked");
        } else {
            listItem.style.textDecoration = "none";
            e.target.removeAttribute("checked");
        }
        saveData();
    }
});


search.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        e.preventDefault()
        addNew();
    }
});

function saveData() {
    localStorage.setItem("newList", ulElement.innerHTML)
}

function showData() {
    ulElement.innerHTML = localStorage.getItem("newList");
}

showData();