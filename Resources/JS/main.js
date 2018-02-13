

function todoAdd() {
    var ul = document.getElementById("list");
    var entry = document.getElementById("new-activity");
    if(entry.value == "") {}
    else {
        
    var li = document.createElement("li");
    li.setAttribute('id',entry.value);
    li.setAttribute('class','todo-item');
    li.innerText = entry.value;
    
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
    
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    li.appendChild(buttons);

    ul.appendChild(li);

    document.getElementById("new-activity").value = '';
}};