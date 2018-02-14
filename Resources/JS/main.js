
// Function to Add a New Activity 
function todoAdd() {
    var ul = document.getElementById("list");
    var entry = document.getElementById("new-activity");
    if(entry.value == "") {}
    else {
        
    var li = document.createElement("li");
    li.setAttribute('id',entry.value);

    
    var todoText = document.createElement("div");
    todoText.innerText = entry.value;
    todoText.setAttribute('class','todo-item');
    todoText.onmouseover = todoHover;
    todoText.onmouseout = todoHoverEnd;


    var buttons = document.createElement("div");
    buttons.setAttribute('class','todo-item-buttons');
    
    var remove = document.createElement("button");
    remove.setAttribute('class','todo-remove');
    var innerRemove = document.createElement("i");
    innerRemove.setAttribute('class','fas fa-trash-alt fa-2x')
    remove.appendChild(innerRemove);

    var complete = document.createElement("button");
    complete.setAttribute('class','todo-complete');
    var innerComplete = document.createElement("i");
    innerComplete.setAttribute('class','fas fa-check fa-2x')
    complete.appendChild(innerComplete)
    
    buttons.appendChild(complete);
    buttons.appendChild(remove);
    todoText.appendChild(buttons);
    li.appendChild(todoText);

    ul.appendChild(li);

    document.getElementById("new-activity").value = '';
}};

function todoHover() {
    this.childNodes[1].style.visibility = "visible";
};

function todoHoverEnd() {
    this.childNodes[1].style.visibility = "hidden";
}