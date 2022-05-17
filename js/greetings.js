const toDoForm = document.getElementById('toDoForm');
const toDoName = document.getElementById('toDoName');


//Write your name here!
function handleToDoName(e) {
    // e.preventDeault();
    const userName = toDoName.value;
    localStorage.setItem('userName', userName);
    // const span = createElement('span');
    // span.innerText = `Good morning, ${userName}.`;
}

const savedUserName = localStorage.getItem('userName');

if(savedUserName) {
    toDoName.classList.add('hidden');
    const greetings = document.createElement('span');
    toDoForm.append(greetings);
    greetings.innerText = `Good morning, ${savedUserName}`;
}

toDoForm.addEventListener('submit', handleToDoName);