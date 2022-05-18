const toDoForm = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementById('toDoList');

let toDosArray = [];

const KEY_TODOS = 'toDos';
const savedInputValue = localStorage.getItem(KEY_TODOS);

function saveInputValue() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDosArray));
}

function deleteListItem(e) {
    const listItem = e.target.parentNode;
    listItem.remove();
    toDosArray = toDosArray.filter(item => item.id !== parseInt(listItem.id));
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDosArray));
}

function paintToDoList(value) {
    const li = document.createElement('li');
    li.id = value.id;
    const span = document.createElement('span');
    span.innerText = value.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteListItem);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function inputHandler(e) {
    e.preventDefault();
    const inputValue = {
        text: toDoInput.value,
        id: Date.now(),
    };
    toDoInput.value = '';
    paintToDoList(inputValue);
    toDosArray.push(inputValue);
    saveInputValue();
}

toDoForm.addEventListener('submit', inputHandler); 

if(savedInputValue) {
    const parsedInputValue = JSON.parse(savedInputValue);
    toDosArray = parsedInputValue;
    parsedInputValue.forEach(item => paintToDoList(item));
}


