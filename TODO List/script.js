const taskBox = document.getElementById("taskbox");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(taskBox.value === ''){
        alert("You must enter the task to add.!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }     
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTaska(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaska();